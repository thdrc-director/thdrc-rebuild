let papersData = []

export async function initPapers() {
  try {
    const url =
      "https://docs.google.com/spreadsheets/d/10o7VVWl4Axa67edzlpsxjMIEeTGFnxzi2kDOJS6eHZQ/gviz/tq?tqx=out:json"

    const res = await fetch(url)
    const text = await res.text()

    const start = text.indexOf("{")
    const end = text.lastIndexOf("}")

    const json = JSON.parse(text.substring(start, end + 1))

    const rows = json?.table?.rows || []

    console.log("TOTAL RAW ROWS:", rows.length)

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

    console.log("PARSED PAPERS:", papersData.length)

  } catch (err) {
    console.error("initPapers failed:", err)

    papersData = [
      {
        Title: "Fallback Paper A",
        Score: "A",
        Status: "offline",
        Category: "test"
      }
    ]
  }
}

export function getPapers() {
  return papersData
}