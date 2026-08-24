let papersData = []

// idle | loading | ready | error
let loadState = "idle"

const SHEETS_URL =
  "https://docs.google.com/spreadsheets/d/10o7VVWl4Axa67edzlpsxjMIEeTGFnxzi2kDOJS6eHZQ/gviz/tq?tqx=out:json"

export async function initPapers() {
  // 避免重複請求（多個元件同時呼叫）
  if (loadState === "loading" || loadState === "ready") return

  loadState = "loading"

  try {
    const res = await fetch(SHEETS_URL)
    const text = await res.text()

    const start = text.indexOf("{")
    const end = text.lastIndexOf("}")

    const json = JSON.parse(text.substring(start, end + 1))
    const rows = json?.table?.rows || []

    papersData = rows.map((r, i) => {
      const c = r.c || []

      return {
        HDS_Code: c[0]?.v ?? `ROW_${i}`,
        Threads_Link: c[2]?.v ?? "",
        Outstanding_Paper: c[3]?.v ?? "",
        Status: c[4]?.v ?? "",
        Category: c[5]?.v ?? "",
        CategoryEN: c[6]?.v ?? "",
        Score: c[7]?.v ?? "",
        Title: c[10]?.v ?? c[1]?.v ?? `Untitled_${i}`,
        Image: c[11]?.v ?? ""
      }
    })

    loadState = "ready"
    window.dispatchEvent(new Event("papersLoaded"))

  } catch (err) {
    console.error("initPapers failed:", err)
    papersData = []
    loadState = "error"
    window.dispatchEvent(new Event("papersError"))
  }
}

export function getPapers() {
  return papersData
}

export function getLoadState() {
  return loadState
}
