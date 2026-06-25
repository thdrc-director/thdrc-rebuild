import "./style.css"

import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
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

function renderApp() {
  console.log("🚀 App rendering...")

  mount("#navbar", Navbar())
  mount("#hero", Hero())
  mount("#papers-root", Papers())
  mount("#footer", Footer())
}

/* ----------------------------- */

async function initApp() {
  initTheme()

  // 等 Google Sheet 載入完成
  await initPapers()

  renderApp()
}

/* ----------------------------- */

window.addEventListener("languageChange", renderApp)
window.addEventListener("themeChange", renderApp)

/* ----------------------------- */

initApp()