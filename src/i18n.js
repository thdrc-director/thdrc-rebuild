let currentLang = localStorage.getItem("lang") || "en"

const translations = {
  en: {
    home: "Home",
    research: "Research",
    about: "About Us",
    language: "English",

    heroTitle: "Taiwan Human Diversity Research Center",

    heroText:
      "Comprehensive analysis of human diversity patterns in Taiwan. Explore behavioral studies, social phenomena, and research insights."
  },

  zh: {
    home: "首頁",
    research: "研究",
    about: "關於我們",
    language: "中文",

    heroTitle: "台灣人類多樣性研究中心",

    heroText:
      "透過行為研究與社會現象分析，探索台灣人類多樣性的研究成果。"
  }
}

export function t(key) {
  return translations[currentLang]?.[key] || key
}

export function toggleLanguage() {
  currentLang = currentLang === "en" ? "zh" : "en"

  localStorage.setItem("lang", currentLang)

  window.dispatchEvent(new Event("languageChange"))
}

export function getLang() {
  return currentLang
}