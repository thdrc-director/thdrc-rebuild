import logo from "../assets/opt/logo-256.webp"

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
        flex justify-between items-center gap-2 px-4 py-3
        border-b border-[var(--border)]
      ">

        <div class="font-mono text-xs opacity-70 whitespace-nowrap">
          HDS-${code}
        </div>

        <div class="
          text-xs px-2 py-1 rounded-full font-medium whitespace-nowrap
          ${getStatusColor(p.Status)}
        ">
          ${p.Status || "-"}
        </div>

      </div>

      <!-- IMAGE AREA -->
      <div class="
        h-36 flex items-center justify-center overflow-hidden
        bg-[var(--hover)]
      ">

        ${
          p.Image
            ? `
              <img
                src="${p.Image}"
                alt="${escapeAttr(p.Title || "Untitled")}"
                loading="lazy"
                decoding="async"
                class="w-full h-full object-cover"
              />
            `
            : `
              <div class="flex flex-col items-center justify-center gap-3 text-center">

                <img
                  src="${logo}"
                  alt=""
                  width="256" height="256"
                  loading="lazy"
                  decoding="async"
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
      <div class="p-4 flex flex-col gap-2 flex-1">

        <div class="font-semibold text-sm leading-snug line-clamp-2 min-h-[2.5rem]">
          ${p.Title || "Untitled"}
        </div>

        <div class="flex items-center justify-between gap-2 text-xs mt-auto">

          <span class="
            px-2 py-1 rounded-full truncate max-w-[9rem]
            ${getCategoryColor(p.Category)}
          ">
            ${p.Category || "-"}
          </span>

          <span class="
            px-2 py-1 rounded-full font-semibold whitespace-nowrap
            ${getScoreColor(p.Score)}
          ">
            ${p.Score || "-"}
          </span>

        </div>

        <div class="grid grid-cols-2 gap-2 mt-2">

          ${
            p.Outstanding_Paper
              ? `<a href="${p.Outstanding_Paper}" target="_blank" rel="noopener noreferrer"
                   class="
                     text-center text-xs px-2 py-2 border rounded-lg
                     bg-[var(--card)] border-[var(--border)]
                     hover:bg-[var(--hover)] transition
                   ">
                   📄 Paper
                 </a>`
              : ""
          }

          ${
            p.Threads_Link
              ? `<a href="${p.Threads_Link}" target="_blank" rel="noopener noreferrer"
                   class="
                     text-center text-xs px-2 py-2 border rounded-lg
                     bg-[var(--card)] border-[var(--border)]
                     hover:bg-[var(--hover)] transition
                   ">
                   💬 Discussion
                 </a>`
              : ""
          }

        </div>

      </div>
    </div>
  `
}

/* ---------------- helpers ---------------- */

function escapeAttr(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
}

function getStatusColor(status) {
  switch ((status || "").toLowerCase()) {
    case "available":
      return "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
    case "eliminate":
      return "bg-red-500/15 text-red-700 dark:text-red-300"
    default:
      return "bg-gray-500/15 text-gray-600 dark:text-gray-300"
  }
}

function getScoreColor(score) {
  switch (score) {
    case "A+":
      return "bg-yellow-400/30 text-yellow-800 dark:text-yellow-200 font-bold"
    case "A":
      return "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
    case "B":
      return "bg-blue-500/15 text-blue-700 dark:text-blue-300"
    case "C":
      return "bg-amber-500/15 text-amber-700 dark:text-amber-300"
    default:
      return "bg-gray-500/15 text-gray-600 dark:text-gray-300"
  }
}

function getCategoryColor(cat) {
  const c = (cat || "").toLowerCase()

  if (c.includes("bias")) return "bg-purple-500/15 text-purple-700 dark:text-purple-300"
  if (c.includes("disinformation")) return "bg-pink-500/15 text-pink-700 dark:text-pink-300"
  if (c.includes("eliminate")) return "bg-red-500/15 text-red-700 dark:text-red-300"

  return "bg-gray-500/15 text-gray-600 dark:text-gray-300"
}
