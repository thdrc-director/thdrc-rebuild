import "./style.css"

import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import About from "./components/About.js"
import Papers from "./components/Papers.js"
import Footer from "./components/Footer.js"

import { initTheme } from "./theme.js"
import { initPapers } from "./components/papersLogic.js"

/* ----------------------------- */

function mount(id, html) {
  const el = document.querySelector(id)

  if (!el) {
    console.warn(`[mount] target not found: ${id}`)
    return
  }

  el.innerHTML = html
}

/* ----------------------------- */

const pages = {
  home: Hero,
  research: Papers,
  about: About
}

let _navGuard = false
let _lastHash = null

function navigate() {
  if (_navGuard) return
  _navGuard = true
  requestAnimationFrame(() => { _navGuard = false })

  const hash = location.hash.replace("#/", "") || "home"
  const page = pages[hash] || Hero

  // 只有換頁才回到頂部；切主題/語言保留捲動位置
  if (hash !== _lastHash) {
    window.scrollTo(0, 0)
    _lastHash = hash
  }

  mount("#navbar", Navbar())
  mount("#page-content", page())
  mount("#footer", Footer())

  updateDocumentMeta(hash)
}

function updateDocumentMeta(hash) {
  const titles = {
    home: "THDRC Research Archive",
    research: "Research Papers | THDRC",
    about: "About Us | THDRC"
  }

  document.title = titles[hash] || titles.home
}

/* ----------------------------- */

async function initApp() {
  initTheme()

  // 不等 Google Sheets —— 先渲染 UI，
  // 資料完成後由 papersLoaded 事件觸發更新（見 papersLogic.js）
  initPapers()

  navigate()
}

/* ----------------------------- */

window.addEventListener("hashchange", navigate)
window.addEventListener("languageChange", navigate)
window.addEventListener("themeChange", navigate)

initApp()
