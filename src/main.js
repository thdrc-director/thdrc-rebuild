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

function navigate() {
  const hash = location.hash.replace("#/", "") || "home"
  const page = pages[hash] || Hero

  mount("#navbar", Navbar())
  mount("#page-content", page())
  mount("#footer", Footer())
}

/* ----------------------------- */

async function initApp() {
  initTheme()

  // 等 Google Sheet 載入完成
  await initPapers()

  navigate()
}

/* ----------------------------- */

window.addEventListener("hashchange", navigate)
window.addEventListener("languageChange", navigate)
window.addEventListener("themeChange", navigate)

/* ----------------------------- */

initApp()