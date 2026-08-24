import logo from "../assets/opt/logo-256.webp"
import { t, toggleLanguage, getLang } from "../i18n.js"
import { initTheme, toggleTheme } from "../theme.js"

/* 分頁圖示 */
const ICONS = {
  home: `<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h5v-6h4v6h5V9.5"/>`,
  research: `<path d="M6 2h8l4 4v16H6z"/><path d="M14 2v4h4"/><path d="M9 13h6M9 17h6"/>`,
  about: `<circle cx="12" cy="12" r="9"/><path d="M12 8h.01"/><path d="M11.5 12h1v4h1"/>`,
}

function icon(key) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
      viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
      aria-hidden="true">
      ${ICONS[key] || ""}
    </svg>
  `
}

export default function Navbar() {
  setTimeout(bind, 0)

  const links = [
    { href: "#/home", label: t("home"), key: "home" },
    { href: "#/research", label: t("research"), key: "research" },
    { href: "#/about", label: t("about"), key: "about" },
  ]

  const current = (location.hash.replace("#/", "") || "home")

  const desktopLinks = links.map(l => `
    <a href="${l.href}"
      class="
        relative py-1
        hover:opacity-70 transition
        ${l.key === current ? "opacity-100 font-semibold" : "opacity-80"}
      ">
      ${l.label}
    </a>
  `).join("")

  /* 手機底部 tab：圖示 + 文字，當前頁高亮 */
  const tabs = links.map(l => `
    <a href="${l.href}"
      aria-current="${l.key === current ? "page" : "false"}"
      class="
        flex flex-col items-center justify-center gap-0.5
        py-2 text-[11px] leading-tight font-medium
        transition
        ${l.key === current ? "text-[var(--text)]" : "opacity-50 hover:opacity-90"}
      ">
      ${icon(l.key)}
      <span>${l.label}</span>
    </a>
  `).join("")

  return `
    <header id="site-header" class="
      sticky top-0 z-50
      bg-[var(--bg)]/90 backdrop-blur
      text-[var(--text)]
      border-b border-[var(--border)]
    ">

      <div class="
        max-w-7xl mx-auto
        flex items-center justify-between gap-3
        h-16 md:h-20
        px-4 sm:px-6 lg:px-8
      ">

        <!-- LEFT: LOGO -->
        <a href="#/home" class="flex items-center gap-2.5 md:gap-3 font-bold text-base md:text-xl shrink-0">
          <img src="${logo}" alt="THDRC logo" width="256" height="256"
            class="w-9 h-9 md:w-12 md:h-12 object-contain" />
          <span class="tracking-wide">THDRC</span>
        </a>

        <!-- NAV (desktop) -->
        <nav class="hidden md:flex items-center gap-6 lg:gap-10 text-base font-medium">
          ${desktopLinks}
        </nav>

        <!-- RIGHT -->
        <div class="flex items-center gap-2 sm:gap-3">

          <!-- LANG -->
          <button id="langBtn" aria-label="Switch language"
            class="
              px-2.5 sm:px-4 py-2
              border rounded-lg text-sm sm:text-base
              border-[var(--border)]
              hover:bg-[var(--hover)] transition
            ">
            ${getLang().toUpperCase()}
          </button>

          <!-- THEME -->
          <button id="themeBtn" aria-label="Toggle theme"
            class="
              px-2.5 sm:px-4 py-2
              border rounded-lg
              border-[var(--border)]
              hover:bg-[var(--hover)] transition
              flex items-center gap-2
            ">
          </button>

        </div>
      </div>
    </header>

    <!-- MOBILE BOTTOM TAB BAR（取代漢堡選單） -->
    <nav aria-label="Primary" class="
      fixed bottom-0 inset-x-0 z-50 md:hidden
      bg-[var(--bg)]/95 backdrop-blur
      border-t border-[var(--border)]
      pb-[env(safe-area-inset-bottom)]
    ">
      <div class="grid grid-cols-3 max-w-md mx-auto">
        ${tabs}
      </div>
    </nav>
  `
}

/* ---------------- INIT ---------------- */

function bind() {
  const themeBtn = document.getElementById("themeBtn")
  const langBtn = document.getElementById("langBtn")

  if (langBtn) langBtn.onclick = () => toggleLanguage()

  if (themeBtn) {
    themeBtn.onclick = () => {
      toggleTheme()
      updateThemeIcon()
      window.dispatchEvent(new Event("themeChange"))
    }
    updateThemeIcon()
  }
}

/* ---------------- ICON UPDATE ---------------- */

function updateThemeIcon() {
  const btn = document.getElementById("themeBtn")
  if (!btn) return

  const isDark = document.documentElement.classList.contains("dark")

  btn.innerHTML = `
    <span class="text-lg leading-none">${isDark ? "🌙" : "☀️"}</span>
    <span class="hidden sm:inline text-sm sm:text-base font-medium">
      ${isDark ? "Dark" : "Light"}
    </span>
  `
}
