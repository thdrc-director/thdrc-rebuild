import { getPapers } from "./papersLogic.js"
import PaperCard from "./PaperCard.js"

let current = {
  search: "",
  category: "ALL",
  score: "ALL",
  status: "ALL",
  sort: "newest"
}

export function bindFilters() {
  const search = document.getElementById("search")
  const category = document.getElementById("category")
  const score = document.getElementById("score")
  const status = document.getElementById("status")
  const sortBtn = document.getElementById("sortBtn")

  if (search) {
    search.oninput = e => {
      current.search = e.target.value.toLowerCase()
      render()
    }
  }

  if (category) {
    category.onchange = e => {
      current.category = e.target.value
      render()
    }
  }

  if (score) {
    score.onchange = e => {
      current.score = e.target.value
      render()
    }
  }

  if (status) {
    status.onchange = e => {
      current.status = e.target.value
      render()
    }
  }

  if (sortBtn) {
    sortBtn.onclick = () => {
      current.sort = current.sort === "newest" ? "oldest" : "newest"
      render()
    }
  }
}

function getFiltered() {
  let data = getPapers()

  if (current.category !== "ALL")
    data = data.filter(p => p.Category === current.category)

  if (current.score !== "ALL")
    data = data.filter(p => (p.Score || "").startsWith(current.score))

  if (current.status !== "ALL")
    data = data.filter(p => p.Status === current.status)

  if (current.search)
    data = data.filter(p =>
      (p.Title || "").toLowerCase().includes(current.search)
    )

  data = data.slice().sort((a, b) => {
    const A = (a.HDS_Code || "").toString()
    const B = (b.HDS_Code || "").toString()

    return current.sort === "oldest"
      ? A.localeCompare(B)
      : B.localeCompare(A)
  })

  return data
}

export function render() {
  const list = document.getElementById("list")
  const status = document.getElementById("papers-status")

  if (!list) return

  const data = getFiltered()

  list.innerHTML = data.map(PaperCard).join("")

  if (status) {
    status.innerText = `Loaded ${data.length} papers`
  }
}