/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],

  safelist: [
    // background
    "dark:bg-slate-950",
    "dark:bg-slate-900",
    "dark:bg-slate-800",

    // text
    "dark:text-white",
    "dark:text-gray-200",

    // borders
    "dark:border-slate-700",
    "dark:border-slate-800",

    // optional hover safety
    "dark:hover:bg-slate-800"
  ],

  theme: {
    extend: {},
  },

  plugins: [],
}