import logo from "../assets/logo.png"

export default function PaperCard(p) {
  const code = p.HDS_Code || "***"

  return `
    <div class="
      w-full max-w-sm mx-auto
      rounded-xl border overflow-hidden
      bg-[var(--card)] text-[var(--text)] border-[var(--border)]
      hover:shadow-lg transition
      flex flex-col
    ">

      <!-- HEADER -->
      <div class="
        flex justify-between items-center px-4 py-3
        border-b border-[var(--border)]
      ">

        <div class="font-mono text-xs opacity-70">
          HDS-${code}
        </div>

        <div class="
          text-xs px-2 py-1 rounded-full font-medium
          ${getStatusColor(p.Status)}
        ">
          ${p.Status || "-"}
        </div>

      </div>

      <!-- IMAGE AREA -->
      <div class="
        h-36 flex items-center justify-center
        bg-[var(--bg)]
      ">

        ${
          p.Image
            ? `
              <img 
                src="${p.Image}" 
                class="w-full h-full object-cover"
              />
            `
            : `
              <div class="flex flex-col items-center justify-center gap-3 text-center">

                <img 
                  src="${logo}" 
                  class="w-20 h-20 opacity-60 object-contain"
                />

                <div class="font-mono tracking-[0.3em] text-sm opacity-80">
                  HDS-${code}
                </div>

                <div class="text-[10px] opacity-50 uppercase tracking-widest">
                  classified document
                </div>

              </div>
            `
        }

      </div>

      <!-- BODY -->
      <div class="p-3 flex flex-col gap-2">

        <div class="font-semibold text-sm leading-snug">
          ${p.Title || "Untitled"}
        </div>

        <div class="flex items-center justify-between text-xs">

          <span class="
            px-2 py-1 rounded-full
            ${getCategoryColor(p.Category)}
          ">
            ${p.Category || "-"}
          </span>

          <span class="
            px-2 py-1 rounded-full font-semibold
            ${getScoreColor(p.Score)}
          ">
            ${p.Score || "-"}
          </span>

        </div>

        <div class="flex flex-col gap-2 mt-2">

          ${
            p.Outstanding_Paper
              ? `<a href="${p.Outstanding_Paper}" target="_blank"
                   class="
                     text-center text-xs px-2 py-1 border rounded
                     bg-[var(--card)] border-[var(--border)]
                     hover:opacity-80 transition
                   ">
                   Paper
                 </a>`
              : ""
          }

          ${
            p.Threads_Link
              ? `<a href="${p.Threads_Link}" target="_blank"
                   class="
                     text-center text-xs px-2 py-1 border rounded
                     bg-[var(--card)] border-[var(--border)]
                     hover:opacity-80 transition
                   ">
                   Discussion
                 </a>`
              : ""
          }

        </div>

      </div>
    </div>
  `
}

/* ---------------- helpers ---------------- */

function getStatusColor(status) {
  switch ((status || "").toLowerCase()) {
    case "available":
      return "bg-green-100 text-green-700"
    case "eliminate":
      return "bg-red-100 text-red-700"
    default:
      return "bg-gray-100 text-gray-700"
  }
}

function getScoreColor(score) {
  switch (score) {
    case "A+":
      return "bg-yellow-200 text-yellow-900 font-bold"
    case "A":
      return "bg-emerald-100 text-emerald-700"
    case "B":
      return "bg-blue-100 text-blue-700"
    case "C":
      return "bg-amber-100 text-amber-700"
    default:
      return "bg-gray-100 text-gray-700"
  }
}

function getCategoryColor(cat) {
  const c = (cat || "").toLowerCase()

  if (c.includes("bias")) return "bg-purple-100 text-purple-700"
  if (c.includes("disinformation")) return "bg-pink-100 text-pink-700"
  if (c.includes("eliminate")) return "bg-red-100 text-red-700"

  return "bg-gray-100 text-gray-700"
}