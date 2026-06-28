import logo from "../assets/logo.png"
import { t, toggleLanguage, getLang } from "../i18n.js"

const THEME_KEY = "theme"

export default function Navbar() {
  setTimeout(bind, 0)

  return `
    <header class="
      flex justify-between items-center
      px-8 py-5
      text-lg
      bg-[var(--bg)] text-[var(--text)]
      border-b border-[var(--border)]
    ">

      <!-- LEFT: LOGO -->
      <div class="flex items-center gap-4 font-bold text-xl">

        <img
          src="${logo}"
          alt="logo"
          class="w-14 h-14 object-contain"
        />

        <span class="tracking-wide">THDRC</span>
      </div>

      <!-- NAV -->
      <nav class="flex gap-8 text-base font-medium">
        <a href="#/home" class="hover:opacity-70">${t("home")}</a>
        <a href="#/research" class="hover:opacity-70">${t("research")}</a>
        <a href="#/about" class="hover:opacity-70">${t("about")}</a>
      </nav>

      <!-- RIGHT -->
      <div class="flex gap-4 items-center">

        <!-- LANG -->
        <button id="langBtn"
          class="
            px-4 py-2
            border rounded-lg
            text-base
            border-[var(--border)]
            hover:opacity-80 transition
          ">
          ${getLang().toUpperCase()}
        </button>

        <!-- THEME -->
        <button id="themeBtn"
          class="
            px-4 py-2
            border rounded-lg
            text-base
            border-[var(--border)]
            hover:opacity-80 transition
            flex items-center gap-2
          ">
        </button>

      </div>

    </header>
  `
}

/* ---------------- INIT ---------------- */

function bind() {
  const themeBtn = document.getElementById("themeBtn")
  const langBtn = document.getElementById("langBtn")

  if (langBtn) {
    langBtn.onclick = () => {
      toggleLanguage()
      window.dispatchEvent(new Event("languageChange"))
    }
  }

  if (themeBtn) {
    initTheme()

    themeBtn.onclick = () => {
      toggleTheme()
      updateThemeIcon()
      window.dispatchEvent(new Event("themeChange"))
    }

    updateThemeIcon()
  }
}

/* ---------------- THEME ---------------- */

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY)

  if (
    saved === "dark" ||
    (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }
}

function toggleTheme() {
  const root = document.documentElement
  const isDark = root.classList.toggle("dark")

  localStorage.setItem(THEME_KEY, isDark ? "dark" : "light")
}

/* ---------------- ICON UPDATE ---------------- */

function updateThemeIcon() {
  const btn = document.getElementById("themeBtn")
  if (!btn) return

  const isDark = document.documentElement.classList.contains("dark")

  btn.innerHTML = `
    <span class="text-2xl">
      ${isDark ? "🌙" : "☀️"}
    </span>

    <span class="font-medium">
      ${isDark ? "Dark" : "Light"}
    </span>
  `
}