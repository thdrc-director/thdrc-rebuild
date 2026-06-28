# PROJECT HANDOVER: THDRC Research Archive

---

## 1. Project Overview

**What it does:**  
A bilingual (English/Chinese) research paper archive for the Taiwan Human Diversity Research Center (THDRC). It displays a browsable, filterable, and searchable collection of research papers sourced from a Google Sheet. Users can browse papers by category, status, score, search keywords, pagination, and sorting.

**Current stage:**  
Early development (v0.0.0). Core features are working: data loading, filtering, pagination, bilingual UI, theme switching, and UI animations.

**User flow:**

Home
→ Hero section with animated count
→ Navigate to Research page

Research
→ Browse paper cards
→ Filter / search / sort
→ Paginate results

About
→ Mission, features, methodology

---

## 2. Tech Stack

| Category | Tech |
|----------|-----|
| Build tool | Vite |
| CSS | Tailwind CSS |
| Language | Vanilla JS (ES Modules) |
| Data | Google Sheets API |
| Hosting | GitHub Pages |

Notes:
- Hybrid Tailwind setup (CDN + PostCSS)
- No backend
- Fully static SPA

---

## 3. Architecture

### Entry

index.html
- #navbar
- #page-content
- #footer

---

### Components

main.js
├── Navbar.js
├── Hero.js
├── Papers.js
│   └── PaperCard.js
├── About.js
└── Footer.js

---

### Routing

#/home
#/research
#/about

Handled by hashchange in main.js

---

## 4. Structure

src/
├── main.js
├── i18n.js
├── theme.js
├── style.css
│
├── components/
│   ├── Navbar.js
│   ├── Hero.js
│   ├── Papers.js
│   ├── PaperCard.js
│   ├── About.js
│   └── Footer.js
│
└── components/papersLogic.js

---

## 5. State

Language → i18n.js  
Theme → theme.js  
Data → papersLogic.js  
Filters → Papers.js  
Route → URL hash  

All state is module-based (no global store).

---

## 6. Data Flow

Google Sheets
→ papersLogic.js
→ Papers.js (filter/sort/search)
→ PaperCard.js (render)

---

## 7. Features

- Google Sheets data fetch
- Paper grid display
- Category / status / score filters
- Search
- Sorting
- Pagination
- Bilingual UI
- Dark / light mode
- Animated hero count
- Responsive design
- About page animations

---

## 8. Design Decisions

No framework  
→ Vanilla JS only

Hash routing  
→ GitHub Pages compatible

Google Sheets as DB  
→ Single source of truth

Full re-render UI  
→ Simple and predictable

---

## 9. Technical Debt

Unused files:
- counter.js
- Filter.js
- Research.js
- vite.svg
- javascript.svg
- data/papers.js
- scripts/papers.js

---

Duplicate theme logic:
- theme.js (primary)
- Navbar.js (duplicate)

---

Deprecated:
- Hero search UI removed from actual flow

---

Hardcoded:
- Google Sheets URL
- pagination size
- base path for GitHub Pages

---

## 10. Future Improvements

- Loading state
- Empty state UI
- Better accessibility
- Remove Tailwind CDN (optional)
- Mobile UX polish
- SEO meta tags

---

## 11. Dev

npm install
npm run dev
npm run build
npm run preview

---

## 12. Deploy

npm run build
git add dist/ -f
git commit -m "deploy"
git push origin main

---

## 13. Live

https://thdrc-director.github.io/thdrc-rebuild/
https://github.com/thdrc-director/thdrc-rebuild

---

## 14. Notes

Static SPA for research browsing.  
No backend. No auth. No server logic.