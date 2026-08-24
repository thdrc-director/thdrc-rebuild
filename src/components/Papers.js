import { initPapers, getPapers, getLoadState } from "./papersLogic.js"

import PaperCard from "./PaperCard.js"
import { t, getLang } from "../i18n.js"

/* ---------------- STATE ---------------- */

let state = {
  search: "",
  category: "ALL",
  score: "ALL",
  status: "ALL",
  sort: "newest",
  page: 1,
  pageSize: 12
}

/* ---------------- GUARDS ---------------- */

let inited = false
let bound = false
let searchTimer = null

/* ---------------- DATA EVENTS（module 層級只註冊一次） ---------------- */

window.addEventListener("papersLoaded", () => render())
window.addEventListener("papersError", () => render())

/* ---------------- MAIN ---------------- */

export default function Papers() {
  if (!inited) {
    inited = true
  } else {
    // Router re-mount: reset guard so events bind to fresh DOM
    bound = false
  }

  queueMicrotask(init)

  return template()
}

/* ---------------- TEMPLATE ---------------- */

function template() {

  const isZh = getLang() === "zh"

  return `
    <section class="
      px-4 py-6 sm:p-6 text-[var(--text)]
      bg-[var(--bg)]
      max-w-7xl mx-auto min-h-screen
    ">

      <h2 class="text-2xl sm:text-3xl font-bold mb-1">
        ${isZh ? "研究論文" : "Research Papers"}
      </h2>
      <p class="text-sm opacity-60 mb-5 sm:mb-6">
        ${isZh ? "瀏覽研究論文資料集" : "Browse research papers dataset"}
      </p>

      <!-- FILTER PANEL -->
      <div class="
        bg-[var(--card)]
        border border-[var(--border)]
        rounded-2xl p-4 sm:p-5 mb-6 shadow-sm
      ">

        <div class="flex flex-col gap-3">

          <input id="search"
            class="w-full px-3.5 py-2.5 border rounded-lg text-sm
                   bg-[var(--card)] border-[var(--border)]"
            placeholder="${isZh ? "搜尋論文（標題 / HDS 編號）…" : "Search papers (title / HDS code)..."}"
          />

          <div class="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">

            <select id="category"
              class="min-w-0 px-3 py-2 border rounded-lg text-sm
                     bg-[var(--card)] border-[var(--border)]">
              <option value="ALL">${isZh ? "所有領域" : "All Categories"}</option>
            </select>

            <select id="status"
              class="min-w-0 px-3 py-2 border rounded-lg text-sm
                     bg-[var(--card)] border-[var(--border)]">
              <option value="ALL">${isZh ? "所有狀態" : "All Status"}</option>
            </select>

            <select id="score"
              class="min-w-0 px-3 py-2 border rounded-lg text-sm
                     bg-[var(--card)] border-[var(--border)]">
              <option value="ALL">${isZh ? "所有評分" : "All Scores"}</option>
            </select>

            <button id="sortBtn"
              class="px-3 py-2 border rounded-lg text-sm text-left sm:text-center
                     bg-[var(--card)] border-[var(--border)]
                     hover:bg-[var(--hover)] transition">
            </button>

          </div>

        </div>

        <div id="papers-status" class="text-xs opacity-60 mt-3"></div>
      </div>

      <div id="list" class="
        grid gap-4 sm:gap-6
        grid-cols-[repeat(auto-fill,minmax(min(260px,100%),1fr))]
      "></div>

      <div id="pagination" class="flex flex-wrap gap-2 mt-8 justify-center"></div>

    </section>
  `
}

/* ---------------- INIT ---------------- */

async function init() {

  queueMicrotask(() => {
    bindEventsOnce()
    populateFilters()
    syncFilterUI()
    updateSortUI()
  })

  await initPapers()

  render()
}

/* ---------------- BIND ---------------- */

function bindEventsOnce() {
  if (bound) return
  bound = true

  bindSearch()
  bindFilters()
  bindSort()
}

/* ---------------- SEARCH ---------------- */

function bindSearch() {
  const el = document.getElementById("search")
  if (!el) return

  // Restore current search value after re-mount
  el.value = state.search

  el.oninput = e => {
    clearTimeout(searchTimer)

    searchTimer = setTimeout(() => {
      state.search = e.target.value.toLowerCase().trim()
      state.page = 1
      render()
    }, 150)
  }
}

/* ---------------- FILTERS ---------------- */

function populateFilters() {
  const data = getPapers()
  if (!data.length) return

  fill("category", "Category")
  fill("status", "Status")
  fill("score", "Score")

  function fill(id, key) {
    const el = document.getElementById(id)
    if (!el) return

    el.querySelectorAll("option:not([value='ALL'])").forEach(o => o.remove())

    const values = [...new Set(
      data
        .map(d => d[key])
        .filter(v => v !== undefined && v !== null && v !== "")
        .map(v => String(v).trim())
    )]

    values.forEach(v => {
      const opt = document.createElement("option")
      opt.value = v
      opt.textContent = v
      el.appendChild(opt)
    })
  }
}

/* ---------------- FILTER UI SYNC ---------------- */

function syncFilterUI() {
  const category = document.getElementById("category")
  const status = document.getElementById("status")
  const score = document.getElementById("score")

  if (category) category.value = state.category
  if (status) status.value = state.status
  if (score) score.value = state.score
}

/* ---------------- FILTER EVENTS ---------------- */

function bindFilters() {
  const bind = (id, key) => {
    const el = document.getElementById(id)
    if (!el) return

    el.onchange = e => {
      state[key] = e.target.value
      state.page = 1
      render()
    }
  }

  bind("category", "category")
  bind("status", "status")
  bind("score", "score")
}

/* ---------------- SORT ---------------- */

function bindSort() {
  const btn = document.getElementById("sortBtn")
  if (!btn) return

  btn.onclick = () => {
    state.sort = state.sort === "newest" ? "oldest" : "newest"
    render()
  }
}

/* ---------------- SORT UI ---------------- */

function updateSortUI() {
  const btn = document.getElementById("sortBtn")
  if (!btn) return

  const isZh = getLang() === "zh"

  btn.innerHTML = `
    <span class="font-semibold whitespace-nowrap">
      ⇅ ${state.sort === "newest" ? (isZh ? "最新" : "Newest") : (isZh ? "最舊" : "Oldest")}
    </span>
  `
}

/* ---------------- DATA ---------------- */

function getFiltered() {
  let data = [...getPapers()]

  /* ---------- CATEGORY ---------- */

  if (state.category !== "ALL") {
    data = data.filter(
      p => String(p.Category || "").trim() === state.category
    )
  }

  /* ---------- STATUS ---------- */

  if (state.status !== "ALL") {
    data = data.filter(
      p => String(p.Status || "").trim() === state.status
    )
  }

  /* ---------- SCORE ---------- */

  if (state.score !== "ALL") {
    data = data.filter(
      p => String(p.Score || "").startsWith(state.score)
    )
  }

  /* ---------- SEARCH ---------- */

  if (state.search) {
    // Normalize spaces and hyphens so all of these work:
    // 299 / HDS-299 / HDS 299 / hds299
    const normalize = value =>
      String(value || "")
        .toLowerCase()
        .replace(/[\s-]/g, "")

    const keyword = normalize(state.search)

    data = data.filter(p => {
      const title = normalize(p.Title)
      const hdsCode = normalize(p.HDS_Code)
      const category = normalize(p.Category)
      const categoryEN = normalize(p.CategoryEN)

      return (
        title.includes(keyword) ||
        hdsCode.includes(keyword) ||
        category.includes(keyword) ||
        categoryEN.includes(keyword)
      )
    })
  }

  /* ---------- SORT ---------- */

  return data.sort((a, b) => {
    const A = Number(a.HDS_Code)
    const B = Number(b.HDS_Code)

    return state.sort === "newest"
      ? B - A
      : A - B
  })
}

/* ---------------- RENDER ---------------- */

function render() {
  const list = document.getElementById("list")
  const statusEl = document.getElementById("papers-status")

  if (!list) return

  const loadState = getLoadState()

  /* ---------- LOADING ---------- */
  if (loadState === "loading" || loadState === "idle") {
    list.innerHTML = skeletonCards()
    if (statusEl) statusEl.textContent = getLang() === "zh" ? "資料載入中…" : "Loading papers…"
    updateSortUI()
    syncFilterUI()
    return
  }

  /* ---------- ERROR ---------- */
  if (loadState === "error") {
    list.innerHTML = errorState()
    if (statusEl) statusEl.textContent = ""

    const retry = document.getElementById("retry-btn")
    if (retry) {
      retry.onclick = async () => {
        list.innerHTML = skeletonCards()
        await initPapers()
        render()
      }
    }
    return
  }

  /* ---------- READY ---------- */
  // 資料可能在首次掛載後才抵達，篩選器選項需在此（重新）填充
  populateFilters()

  const data = getFiltered()

  const totalPages = Math.max(1, Math.ceil(data.length / state.pageSize))

  if (state.page > totalPages) {
    state.page = 1
  }

  const start = (state.page - 1) * state.pageSize
  const pageData = data.slice(start, start + state.pageSize)

  /* ---------- EMPTY ---------- */
  if (data.length === 0) {
    list.innerHTML = emptyState()
  } else {
    list.innerHTML = pageData.map(PaperCard).join("")
  }

  if (statusEl) {
    statusEl.textContent = getLang() === "zh"
      ? `共 ${data.length} 筆論文｜第 ${state.page} / ${totalPages} 頁`
      : `Loaded ${data.length} papers | Page ${state.page}/${totalPages}`
  }

  renderPagination(totalPages)

  // Always keep controls synced with state
  updateSortUI()
  syncFilterUI()

  // 清除篩選按鈕
  const clearBtn = document.getElementById("clear-filters")
  if (clearBtn) {
    clearBtn.onclick = () => {
      state.search = ""
      state.category = "ALL"
      state.status = "ALL"
      state.score = "ALL"
      state.page = 1
      const search = document.getElementById("search")
      if (search) search.value = ""
      render()
    }
  }
}

/* ---------------- STATES ---------------- */

function skeletonCards() {
  const card = `
    <div class="
      rounded-xl border overflow-hidden animate-pulse
      bg-[var(--card)] border-[var(--border)]
    ">
      <div class="h-14 border-b border-[var(--border)]"></div>
      <div class="h-36 bg-[var(--hover)]"></div>
      <div class="p-3 flex flex-col gap-2">
        <div class="h-4 rounded bg-[var(--hover)] w-11/12"></div>
        <div class="h-4 rounded bg-[var(--hover)] w-2/3"></div>
        <div class="h-6 rounded-full bg-[var(--hover)] w-20 mt-1"></div>
      </div>
    </div>
  `
  return card.repeat(Math.min(state.pageSize, 8))
}

function emptyState() {
  const isZh = getLang() === "zh"

  return `
    <div class="
      col-span-full flex flex-col items-center justify-center
      text-center py-16 px-4
    ">
      <div class="text-5xl mb-4">🔍</div>

      <p class="text-lg font-semibold mb-2">
        ${isZh ? "找不到符合條件的論文" : "No papers match your filters"}
      </p>

      <p class="text-sm opacity-60 mb-6">
        ${isZh ? "試試調整關鍵字或清除篩選條件。" : "Try different keywords or clear the filters."}
      </p>

      <button id="clear-filters"
        class="
          px-5 py-2.5 rounded-xl text-sm font-medium
          border border-[var(--border)] bg-[var(--card)]
          hover:bg-[var(--hover)] transition
        ">
        ${isZh ? "清除所有篩選" : "Clear all filters"}
      </button>
    </div>
  `
}

function errorState() {
  const isZh = getLang() === "zh"

  return `
    <div class="
      col-span-full flex flex-col items-center justify-center
      text-center py-16 px-4
    ">
      <div class="text-5xl mb-4">⚠️</div>

      <p class="text-lg font-semibold mb-2">
        ${isZh ? "資料載入失敗" : "Failed to load papers"}
      </p>

      <p class="text-sm opacity-60 mb-6 max-w-sm">
        ${isZh
          ? "無法連線到 Google Sheets 資料來源，請檢查網路後再試一次。"
          : "Could not reach the Google Sheets data source. Check your connection and try again."}
      </p>

      <button id="retry-btn"
        class="
          px-5 py-2.5 rounded-xl text-sm font-medium
          bg-[var(--text)] text-[var(--bg)]
          hover:opacity-85 transition
        ">
        ${isZh ? "重新載入" : "Retry"}
      </button>
    </div>
  `
}

/* ---------------- PAGINATION ---------------- */

function renderPagination(totalPages) {
  const el = document.getElementById("pagination")
  if (!el) return

  const pages = getPageNumbers(state.page, totalPages)

  el.innerHTML = pages.map(p => {
    if (p === "...") {
      return `<span class="px-2 py-1.5 opacity-50 select-none">...</span>`
    }

    return `
      <button aria-label="Page ${p}"
        aria-current="${p === state.page ? "page" : "false"}"
        class="
          min-w-[2.5rem] py-1.5 px-2 border rounded-lg text-sm
          bg-[var(--card)]
          border-[var(--border)]
          hover:bg-[var(--hover)] transition
          ${p === state.page ? "font-bold bg-[var(--text)] text-[var(--bg)] border-[var(--text)]" : "opacity-75"}
        ">
        ${p}
      </button>
    `
  }).join("")

  el.querySelectorAll("button").forEach(btn => {
    btn.onclick = () => {
      state.page = Number(btn.textContent)
      render()
      document.querySelector("h2")?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  })
}

/* ---------------- PAGINATION LOGIC ---------------- */

function getPageNumbers(current, total) {
  const range = []
  const delta = 3

  const left = Math.max(1, current - delta)
  const right = Math.min(total, current + delta)

  if (left > 1) {
    range.push(1)

    if (left > 2) {
      range.push("...")
    }
  }

  for (let i = left; i <= right; i++) {
    range.push(i)
  }

  if (right < total) {
    if (right < total - 1) {
      range.push("...")
    }

    range.push(total)
  }

  return range
}
