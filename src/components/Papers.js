import { initPapers, getPapers } from "./papersLogic.js"
import PaperCard from "./PaperCard.js"

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

/* ---------------- MAIN ---------------- */

export default function Papers() {
  if (!inited) {
    inited = true
    queueMicrotask(init)
  }

  return template()
}

/* ---------------- TEMPLATE ---------------- */

function template() {
  return `
    <section class="
      p-6 text-[var(--text)]
      bg-[var(--bg)]
      max-w-7xl mx-auto min-h-screen
    ">

      <h2 class="text-3xl font-bold mb-1">Research Papers</h2>
      <p class="text-sm opacity-60 mb-6">Browse research papers dataset</p>

      <div class="
        bg-[var(--card)]
        border border-[var(--border)]
        rounded-2xl p-5 mb-6 shadow-sm
      ">

        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

          <button id="sortBtn"
            class="px-3 py-2 border rounded-lg text-sm
                   bg-[var(--card)] border-[var(--border)]
                   hover:opacity-80 transition">
          </button>

          <input id="search"
            class="w-full md:max-w-md px-3 py-2 border rounded-lg text-sm
                   bg-[var(--card)] border-[var(--border)]"
            placeholder="Search papers..."
          />

          <div class="flex flex-wrap gap-2">

            <select id="category"
              class="px-3 py-2 border rounded-lg text-sm
                     bg-[var(--card)] border-[var(--border)]">
              <option value="ALL">All Categories</option>
            </select>

            <select id="status"
              class="px-3 py-2 border rounded-lg text-sm
                     bg-[var(--card)] border-[var(--border)]">
              <option value="ALL">All Status</option>
            </select>

            <select id="score"
              class="px-3 py-2 border rounded-lg text-sm
                     bg-[var(--card)] border-[var(--border)]">
              <option value="ALL">All Scores</option>
            </select>

          </div>

        </div>

        <div id="papers-status" class="text-xs opacity-60 mt-3"></div>
      </div>

      <div id="list" class="
        grid gap-6
        grid-cols-[repeat(auto-fill,minmax(260px,1fr))]
      "></div>

      <div id="pagination" class="flex gap-2 mt-8 justify-center"></div>

    </section>
  `
}

/* ---------------- INIT (FIXED ORDER) ---------------- */

async function init() {
  await initPapers()

  render() // 必須先 render DOM

  queueMicrotask(() => {
    bindEventsOnce()
    populateFilters()
    updateSortUI()
  })
}

/* ---------------- BIND ONCE ---------------- */

function bindEventsOnce() {
  if (bound) return
  bound = true

  bindSearch()
  bindFilters()
  bindSort()

  window.addEventListener("themeChange", render)
  window.addEventListener("languageChange", render)
}

/* ---------------- SEARCH ---------------- */

function bindSearch() {
  const el = document.getElementById("search")
  if (!el) return

  el.oninput = e => {
    clearTimeout(searchTimer)

    searchTimer = setTimeout(() => {
      state.search = e.target.value.toLowerCase()
      state.page = 1
      render()
    }, 150)
  }
}

/* ---------------- FILTERS (FIXED + CLEAN) ---------------- */

function populateFilters() {
  const data = getPapers()

  fill("category", "Category")
  fill("status", "Status")
  fill("score", "Score")

  function fill(id, key) {
    const el = document.getElementById(id)
    if (!el) return

    // 🔥 清掉舊 options（重要修復）
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

function updateSortUI() {
  const btn = document.getElementById("sortBtn")
  if (!btn) return

  btn.innerHTML = `
    Sort:
    <span class="font-semibold">
      ${state.sort === "newest" ? "⬇ Newest" : "⬆ Oldest"}
    </span>
  `
}

/* ---------------- DATA ---------------- */

function getFiltered() {
  let data = getPapers()

  if (state.category !== "ALL")
    data = data.filter(p => p.Category === state.category)

  if (state.status !== "ALL")
    data = data.filter(p => p.Status === state.status)

  if (state.score !== "ALL")
    data = data.filter(p => (p.Score || "").startsWith(state.score))

  if (state.search)
    data = data.filter(p =>
      (p.Title || "").toLowerCase().includes(state.search)
    )

  return data.sort((a, b) => {
    const A = Number(a.HDS_Code)
    const B = Number(b.HDS_Code)
    return state.sort === "newest" ? B - A : A - B
  })
}

/* ---------------- RENDER ---------------- */

function render() {
  const list = document.getElementById("list")
  const status = document.getElementById("papers-status")

  if (!list) return

  const data = getFiltered()

  const totalPages = Math.max(1, Math.ceil(data.length / state.pageSize))
  if (state.page > totalPages) state.page = 1

  const start = (state.page - 1) * state.pageSize
  const pageData = data.slice(start, start + state.pageSize)

  list.innerHTML = pageData.map(PaperCard).join("")

  if (status) {
    status.textContent = `Loaded ${data.length} papers | Page ${state.page}/${totalPages}`
  }

  renderPagination(totalPages)
}

/* ---------------- PAGINATION ---------------- */

function renderPagination(totalPages) {
  const el = document.getElementById("pagination")
  if (!el) return

  const pages = getPageNumbers(state.page, totalPages)

  el.innerHTML = pages.map(p => {
    if (p === "...") return `<span class="px-2 opacity-50">...</span>`

    return `
      <button class="
        px-3 py-1 border rounded-lg
        bg-[var(--card)]
        border-[var(--border)]
        ${p === state.page ? "font-bold" : "opacity-70"}
      ">
        ${p}
      </button>
    `
  }).join("")

  el.querySelectorAll("button").forEach(btn => {
    btn.onclick = () => {
      state.page = Number(btn.textContent)
      render()
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
    if (left > 2) range.push("...")
  }

  for (let i = left; i <= right; i++) range.push(i)

  if (right < total) {
    if (right < total - 1) range.push("...")
    range.push(total)
  }

  return range
}