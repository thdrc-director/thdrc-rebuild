# RWD & Performance Optimization Notes

本次優化聚焦兩個主軸：**手機版 RWD** 與 **圖片/載入效能**，
並順手處理了交接文件中列為 Priority 的 Loading / Empty / Error state。

## 1. 圖片優化

| 檔案 | 原始 | 優化後 | 縮減 |
|------|------|--------|------|
| thdrc_administration-building.png | 3,619 KB | building-800.webp 55 KB | -98% |
| director.png | 1,877 KB | director-800.webp 91 KB | -95% |
| hero.jpg | 244 KB | hero-640/1280/1920.webp 13~79 KB | 手機只抓 13 KB |
| logo.png | 205 KB | logo-256.webp 17 KB | -92% |
| threads.png / discord.png | 84+65 KB | 96px webp（<4KB 由 Vite 內嵌） | -98% |

- Hero 用 `<picture>` + `srcset/sizes`，手機抓 640w、桌機 1920w，`fetchpriority="high"`
- 內容圖補 `width/height`（防 CLS）、`loading="lazy"`
- 優化檔在 `src/assets/opt/`，原始檔可從 git 歷史找回

## 2. 移除 Tailwind CDN

- 刪除 `postcss.config.js`（與 `@tailwindcss/vite` 重複處理）
- 刪除 `tailwind.config.js`（v4 不讀取；dark mode 改用 style.css 的 `@custom-variant dark`）
- `package.json` 移除 `autoprefixer`、`@tailwindcss/postcss`、`gh-pages` 與舊 deploy scripts

## 3. Navbar 手機版

sticky + backdrop-blur、漢堡選單（aria-expanded）、主題按鈕手機只顯示圖示、
手機選單內附語言切換、當前路由高亮、logo 改 256px webp。

## 4. Hero 首屏

移除 `whitespace-nowrap`、改 `text-balance`；高度 `100svh`；
新增 CTA（瀏覽研究資料 / 關於我們）與 scroll cue；動畫尊重 `prefers-reduced-motion`。

## 5. 資料載入重構

原本整站等 Google Sheets 回應才渲染 → 改事件驅動立即渲染：
skeleton 載入載入狀態、錯誤 UI + 重試、空狀態 + 清除篩選。

## 6. 其他

- 修復 style.css `.dark {` 缺右括號吞掉表單樣式的 bug
- PaperCard：line-clamp-2、深色模式標籤配色、按鈕雙欄
- 篩選器手機排列、分頁 flex-wrap 加大觸控區
- Footer 手機 2 欄、死連結接真路由
- `<html lang>` 同步、每頁 title、meta description、theme-color、preconnect
- 清理 legacy 檔案與根目錄 0-byte 檔案

## 7. 開發注意

- 同步後請執行一次 `npm install`
- dev server 網址含 base path：`http://localhost:5173/thdrc-rebuild/`
