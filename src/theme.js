const KEY = "theme"

export function initTheme() {
  const saved = localStorage.getItem(KEY)

  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  const isDark = saved ? saved === "dark" : systemDark

  document.documentElement.classList.toggle("dark", isDark)

  localStorage.setItem(KEY, isDark ? "dark" : "light")
}

export function toggleTheme() {
  const root = document.documentElement
  const isDark = root.classList.toggle("dark")

  localStorage.setItem(KEY, isDark ? "dark" : "light")
}