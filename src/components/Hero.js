import hero640 from "../assets/opt/hero-640.webp"
import hero1280 from "../assets/opt/hero-1280.webp"
import hero1920 from "../assets/opt/hero-1920.webp"
import heroJpg from "../assets/opt/hero-1280.jpg"

import { t, getLang } from "../i18n.js"

import { getPapers, getLoadState } from "./papersLogic.js"

export default function Hero() {

  const isZh = getLang() === "zh"

  setTimeout(() => animateHero(), 100)

  // 數字動畫：輪詢等資料就緒再起跑（避免事件漏接／時序問題）
  startCounterWhenReady()

  return `
<section
class="
  relative w-full
  flex items-center justify-center
  text-white overflow-hidden

  min-h-[calc(100svh-4rem)]
  md:min-h-[calc(100svh-5rem)]
"
>

  <!-- BACKGROUND IMAGE (responsive) -->
  <picture aria-hidden="true">
    <source
      type="image/webp"
      srcset="${hero640} 640w, ${hero1280} 1280w, ${hero1920} 1920w"
      sizes="100vw"
    />
    <img
      src="${heroJpg}"
      alt=""
      fetchpriority="high"
      decoding="async"
      class="absolute inset-0 w-full h-full object-cover"
    />
  </picture>

  <!-- OVERLAY -->
  <div
    class="
      absolute inset-0
      bg-gradient-to-b from-black/70 via-black/60 to-black/75
    "
  ></div>

  <div
    id="hero-box"
    class="
      relative z-10
      flex flex-col items-center text-center
      w-full max-w-5xl
      px-5 sm:px-6

      opacity-0 translate-y-4
      transition-all duration-[1400ms] ease-out
    "
  >

    <h1
      class="
        font-bold mb-5 md:mb-6 tracking-tight
        text-balance
        text-[2rem] leading-tight
        sm:text-5xl sm:leading-tight
        lg:text-6xl lg:leading-tight
      "
    >
      ${t("heroTitle")}
    </h1>

    <p
      class="
        text-base sm:text-lg md:text-xl
        opacity-80 mb-5
        max-w-xl sm:max-w-2xl lg:max-w-3xl
      "
    >
      ${t("heroText")}
    </p>

    <!-- COUNT -->
    <div
      class="
        flex flex-wrap items-baseline justify-center gap-x-1.5 gap-y-1
        mb-8
        text-sm sm:text-base opacity-80
      "
    >
      <span>${isZh ? "目前共有" : "More Than"}</span>
      <span
        id="hero-count"
        class="text-white text-3xl sm:text-4xl font-bold tabular-nums px-1"
      >0</span>
      <span>${isZh ? "筆研究樣本" : "Research Samples Over Here"}</span>
    </div>

    <!-- CTA -->
    <div class="flex flex-col sm:flex-row gap-3 w-full sm:w-auto px-2 sm:px-0">
      <a
        href="#/research"
        class="
          text-center px-7 py-3.5 rounded-xl
          bg-white text-gray-900
          font-semibold text-sm sm:text-base
          hover:bg-white/85 transition
          shadow-lg
        "
      >
        ${isZh ? "瀏覽研究資料" : "Browse Research"}
      </a>
      <a
        href="#/about"
        class="
          text-center px-7 py-3.5 rounded-xl
          border border-white/50 text-white
          font-medium text-sm sm:text-base
          hover:bg-white/10 transition
        "
      >
        ${isZh ? "關於我們" : "About Us"}
      </a>
    </div>

    <div
      class="
        mt-8 sm:mt-10
        text-xs opacity-50 tracking-wide
      "
    >
      ${isZh
        ? "台灣人類多樣性研究中心"
        : "Taiwan Human Diversity Research Center"}
    </div>

  </div>

  <!-- SCROLL CUE -->
  <a
    href="#/research"
    aria-label="${isZh ? "往下瀏覽" : "Scroll down"}"
    class="
      absolute bottom-4 left-1/2 -translate-x-1/2 z-10
      opacity-60 hover:opacity-100 transition
      animate-bounce
    "
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
      viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  </a>

</section>
`
}

/* ---------------- COUNTER ---------------- */

// 每 400ms 檢查一次資料是否就緒，就緒後起跑數字動畫
// （最多嘗試 40 次 ≈ 16 秒；離開首頁時元素不存在即自動停止）
function startCounterWhenReady() {
  let tries = 0

  const attempt = () => {
    tries++

    const el = document.getElementById("hero-count")
    if (!el) return // 已切換頁面

    const papers = getPapers() || []
    const n = papers.length

    if (n > 0 || getLoadState() === "error") {
      animateCount(n)
      return
    }

    if (tries < 40) {
      setTimeout(attempt, 400)
    }
  }

  setTimeout(attempt, 700)
}

/* ---------------- ANIMATIONS ---------------- */

function animateHero() {
  const el = document.getElementById("hero-box")
  if (!el) return

  requestAnimationFrame(() => {
    el.classList.remove("opacity-0", "translate-y-4")
    el.classList.add("opacity-100", "translate-y-0")
  })
}

function easeOutExpo(x) {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
}

function animateCount(target) {
  const el = document.getElementById("hero-count")
  if (!el) return

  // 沒有資料時直接顯示 0
  if (target === 0) {
    el.textContent = "0"
    return
  }

  // 系統開啟「減少動態效果」時縮短動畫（仍保留跳數字效果）
  const duration =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? 600
      : 1800
  const start = performance.now()

  function update(now) {
    const progress = Math.min((now - start) / duration, 1)
    const value = Math.floor(target * easeOutExpo(progress))

    el.textContent = value.toLocaleString()

    if (progress < 1) {
      requestAnimationFrame(update)
    } else {
      el.textContent = target.toLocaleString()
    }
  }

  requestAnimationFrame(update)
}
