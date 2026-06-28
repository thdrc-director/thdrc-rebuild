import { t, getLang } from "../i18n.js"
import directorImg from "../assets/director.png"
import buildingImg from "../assets/thdrc_administration-building.png"
import threadsIcon from "../assets/threads.png"
import discordIcon from "../assets/discord.png"

export default function About() {
  const isZh = getLang() === "zh"

  setTimeout(() => {
    const el = document.getElementById("about")
    if (!el) return
    requestAnimationFrame(() => {
      el.classList.remove("opacity-0", "translate-y-6")
      el.classList.add("opacity-100", "translate-y-0")
    })
  }, 100)

  setTimeout(() => {
    const director = document.getElementById("director-text")
    const history = document.getElementById("history-text")
    if (director) typeWriter(director, director.dataset.text || "")
    if (history) typeWriter(history, history.dataset.text || "")
  }, 400)

  return `
<section
id="about"
class="
opacity-0 translate-y-6 transition-all duration-1000 ease-out
py-16 md:py-24
bg-[var(--bg)] text-[var(--text)]
"
>

<div class="max-w-5xl mx-auto px-4 md:px-6">

  <!-- HEADER -->
  <div class="
    text-center mb-12 md:mb-16
  ">

    <h2 class="
      text-3xl md:text-4xl font-bold mb-4
    ">
      ${t("aboutTitle")}
    </h2>

    <div class="
      w-16 h-1 mx-auto rounded-full
      bg-[var(--text)] opacity-20
    "></div>

  </div>

  <!-- DIRECTOR -->
  <div class="
    p-8 md:p-10 mb-10
    rounded-2xl
    bg-[var(--card)]
    border border-[var(--border)]
    shadow-sm
  ">
    <h3 class="text-lg font-semibold mb-3 tracking-wide">
      ${isZh ? "中心主任" : "Director"}
    </h3>
    <div class="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
      <img src="${directorImg}" alt="Director" class="w-full md:w-48 h-auto object-cover rounded-lg" />
      <p
        id="director-text"
        data-text="${isZh
          ? '本中心由一位具備深厚人類學研究背景的學者領導，長期投入於田野調查與族群研究工作，致力於推動台灣人群多樣性的學術研究與資料整合。其研究關注文化差異、族群互動與社會結構之間的關聯，並同時將研究成果延伸至公共議題與社會實踐，促進更全面的理解與對話。'
          : 'The center is led by a scholar with extensive anthropological research experience, dedicated to advancing academic inquiry and social practice regarding Taiwan\'s ethnic diversity.'
        }"
        class="leading-relaxed opacity-80 text-base md:text-lg"
      ></p>
    </div>
  </div>

  <!-- HISTORY -->
  <div class="
    p-8 md:p-10 mb-10
    rounded-2xl
    bg-[var(--card)]
    border border-[var(--border)]
    shadow-sm
  ">
    <h3 class="text-lg font-semibold mb-3 tracking-wide">
      ${isZh ? "建築沿革" : "History"}
    </h3>
    <div class="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
      <img src="${buildingImg}" alt="THDRC Building" class="w-full md:w-48 h-auto object-cover rounded-lg" />
      <p
        id="history-text"
        data-text="${isZh
          ? '本中心的行政大樓歷經多年規劃與設計，最終於 2025 年正式落成啟用。其建置過程凝聚了長期的研究發展需求與制度性規劃，象徵中心在研究能量與組織規模上的穩定成長。隨著大樓啟用，本中心也進一步強化資料整合與跨領域研究的基礎，持續推動台灣人類多樣性研究的深化與延展。'
          : 'The center\'s administration building was completed after years of planning and officially inaugurated in 2025.'
        }"
        class="leading-relaxed opacity-80 text-base md:text-lg"
      ></p>
    </div>
  </div>

  <!-- MISSION -->
  <div class="
    p-8 md:p-10 mb-10
    rounded-2xl
    bg-[var(--card)]
    border border-[var(--border)]
    shadow-sm
  ">

    <h3 class="
      text-lg font-semibold mb-3
      tracking-wide
    ">
      ${t("aboutMission")}
    </h3>

    <p class="
      leading-relaxed opacity-80
      text-base md:text-lg
    ">
      ${t("aboutMissionText")}
    </p>

  </div>

  <!-- WHAT'S INCLUDED -->
  <div class="mb-10">

    <h3 class="
      text-xl font-semibold mb-4
    ">
      ${t("aboutWhatTitle")}
    </h3>

    <p class="
      leading-relaxed opacity-70
      mb-6 max-w-3xl
    ">
      ${t("aboutWhatDesc")}
    </p>

  </div>

  <!-- FEATURE CARDS -->
  <div class="
    grid grid-cols-1 md:grid-cols-3 gap-4
    mb-10
  ">

    ${featureCard(
      "📚",
      t("featureDatabase"),
      t("featureDatabaseDesc")
    )}

    ${featureCard(
      "🌐",
      t("featureBilingual"),
      t("featureBilingualDesc")
    )}

    ${featureCard(
      "🌙",
      t("featureTheme"),
      t("featureThemeDesc")
    )}

  </div>

  <!-- DATA & METHODOLOGY -->
  <div class="
    p-8 md:p-10 mb-10
    rounded-2xl
    bg-[var(--card)]
    border border-[var(--border)]
    shadow-sm
  ">

    <h3 class="
      text-lg font-semibold mb-3
    ">
      ${t("aboutDataTitle")}
    </h3>

    <p class="
      leading-relaxed opacity-80
      text-base md:text-lg
    ">
      ${t("aboutDataDesc")}
    </p>

  </div>

  <!-- SOCIAL HUB -->
  <div class="mt-10 p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)]">

    <h3 class="text-lg font-semibold mb-4">
      ${isZh ? "社群平台" : "Social Hub"}
    </h3>

    <div class="flex flex-col sm:flex-row gap-3">

      <a
        href="https://www.threads.com/@thdrc_director"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-3 px-4 py-3 rounded-xl bg-black/20 hover:bg-black/30 transition"
      >
        <img src="${threadsIcon}" class="w-5 h-5" />
        <span>Threads</span>
      </a>

      <a
        href="https://discord.gg/heMFtgA69y"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-3 px-4 py-3 rounded-xl bg-black/20 hover:bg-black/30 transition"
      >
        <img src="${discordIcon}" class="w-5 h-5" />
        <span>Discord Community</span>
      </a>

    </div>

  </div>

  <!-- ATTRIBUTION -->
  <div class="
    text-center
    text-xs opacity-50
    pt-6
    border-t border-[var(--border)]
  ">
    ${t("aboutAttribution")}
  </div>


</div>

</section>
  `
}

/* ---------------- HELPERS ---------------- */

function featureCard(icon, title, desc) {
  return `
    <div class="
      p-6 rounded-xl
      bg-[var(--card)]
      border border-[var(--border)]
      hover:shadow-md transition
      flex flex-col items-start gap-3
    ">
      <span class="text-3xl">${icon}</span>

      <h4 class="font-semibold">${title}</h4>

      <p class="text-sm opacity-70 leading-relaxed">
        ${desc}
      </p>
    </div>
  `
}

/* ---------------- TYPEWRITER ---------------- */

function typeWriter(el, text, speed = 18) {
  if (!el) return

  // Cancel any previous typeWriter on this element
  if (el._twCancel) el._twCancel.cancelled = true
  const token = { cancelled: false }
  el._twCancel = token

  el.textContent = ""
  let i = 0

  function step() {
    if (token.cancelled) return
    if (i < text.length) {
      el.textContent += text[i]
      i++
      setTimeout(step, speed)
    }
  }

  step()
}
