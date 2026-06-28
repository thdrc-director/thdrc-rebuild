let currentLang = localStorage.getItem("lang") || "en"

const translations = {
  en: {
    home: "Home",
    research: "Research",
    about: "About Us",
    language: "English",

    heroTitle: "Taiwan Human Diversity Research Center",

    heroText:
      "Comprehensive analysis of human diversity patterns in Taiwan. Explore behavioral studies, social phenomena, and research insights.",

    aboutTitle: "About This Archive",
    aboutMission: "Our Mission",
    aboutMissionText:
      "The Taiwan Human Diversity Research Center (THDRC) maintains this research archive to document and analyze human diversity patterns in Taiwan through behavioral studies, social phenomena, and systematic research.",
    aboutWhatTitle: "What's Included",
    aboutWhatDesc:
      "This archive contains research samples organized by category, status, and quality score. Each entry includes metadata, links to full papers, and discussion threads for community engagement.",

    featureDatabase: "Research Database",
    featureDatabaseDesc:
      "Browse curated research papers with detailed metadata and categorization",
    featureBilingual: "Bilingual Interface",
    featureBilingualDesc:
      "Full English and Chinese language support with seamless switching",
    featureTheme: "Dark Mode",
    featureThemeDesc:
      "Light and dark themes for comfortable reading day or night",

    aboutDataTitle: "Data & Methodology",
    aboutDataDesc:
      "Research samples are systematically collected and categorized. Each entry is assigned a quality score (A+, A, B, C) and status indicator (Available / Eliminate) to help researchers evaluate relevance.",
    aboutAttribution:
      "Data sourced from THDRC research collections and updated regularly."
  },

  zh: {
    home: "首頁",
    research: "研究",
    about: "關於我們",
    language: "中文",

    heroTitle: "台灣人類多樣性研究中心",

    heroText:
      "透過行為研究與社會現象分析，探索台灣人類多樣性的研究成果。",

    aboutTitle: "關於本資料庫",
    aboutMission: "我們的使命",
    aboutMissionText:
      "台灣人類多樣性研究中心（THDRC）建立本研究資料庫，透過行為研究、社會現象分析與系統性研究，記錄並分析台灣人類多樣性模式。",
    aboutWhatTitle: "資料庫內容",
    aboutWhatDesc:
      "本資料庫收錄依領域、狀態與品質評分分類的研究樣本。每筆資料包含詳細元數據、論文全文連結及社群討論串。",

    featureDatabase: "研究資料庫",
    featureDatabaseDesc:
      "瀏覽經過篩選的研究論文，附詳細元數據與分類",
    featureBilingual: "雙語介面",
    featureBilingualDesc:
      "完整支援中英文雙語，一鍵切換",
    featureTheme: "深色模式",
    featureThemeDesc:
      "淺色與深色主題，日夜閱讀舒適",

    aboutDataTitle: "資料與研究方法",
    aboutDataDesc:
      "研究樣本經過系統性收集與分類。每筆資料皆標示品質評分（A+、A、B、C）與狀態（Available / Eliminate），協助研究者評估相關性。",
    aboutAttribution:
      "資料來源：THDRC 研究資料集，定期更新。"
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