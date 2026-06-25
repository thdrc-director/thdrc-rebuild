(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=localStorage.getItem(`lang`)||`en`,t={en:{home:`Home`,research:`Research`,about:`About Us`,language:`English`,heroTitle:`More Than 0 Research Samples Over Here`,heroText:`Comprehensive analysis of human diversity patterns in Taiwan. Explore behavioral studies, social phenomena, and research insights.`},zh:{home:`首頁`,research:`研究`,about:`關於我們`,language:`中文`,heroTitle:`探索台灣人類多樣性研究資料`,heroText:`透過行為研究、社會現象分析，了解台灣人類多樣性的研究成果。`}};function n(n){return t[e]?.[n]||n}function r(){e=e===`en`?`zh`:`en`,localStorage.setItem(`lang`,e),window.dispatchEvent(new Event(`languageChange`))}function i(){return e}var a=`theme`;function o(){return setTimeout(s,0),`
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
          src="/logo.png"
          alt="logo"
          class="w-14 h-14 object-contain"
        />

        <span class="tracking-wide">THDRC</span>
      </div>

      <!-- NAV -->
      <nav class="flex gap-8 text-base font-medium">
        <a href="#home" class="hover:opacity-70">${n(`home`)}</a>
        <a href="#papers" class="hover:opacity-70">${n(`research`)}</a>
        <a href="#about" class="hover:opacity-70">${n(`about`)}</a>
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
          ${i().toUpperCase()}
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
  `}function s(){let e=document.getElementById(`themeBtn`),t=document.getElementById(`langBtn`);t&&(t.onclick=()=>{r(),window.dispatchEvent(new Event(`languageChange`))}),e&&(c(),e.onclick=()=>{l(),u(),window.dispatchEvent(new Event(`themeChange`))},u())}function c(){let e=localStorage.getItem(a);e===`dark`||!e&&window.matchMedia(`(prefers-color-scheme: dark)`).matches?document.documentElement.classList.add(`dark`):document.documentElement.classList.remove(`dark`)}function l(){let e=document.documentElement.classList.toggle(`dark`);localStorage.setItem(a,e?`dark`:`light`)}function u(){let e=document.getElementById(`themeBtn`);if(!e)return;let t=document.documentElement.classList.contains(`dark`);e.innerHTML=`
    <span class="text-2xl">
      ${t?`🌙`:`☀️`}
    </span>

    <span class="font-medium">
      ${t?`Dark`:`Light`}
    </span>
  `}var d=`/thdrc-rebuild/assets/hero-B92wop4K.jpg`,f=[];async function p(){try{let e=await(await fetch(`https://docs.google.com/spreadsheets/d/10o7VVWl4Axa67edzlpsxjMIEeTGFnxzi2kDOJS6eHZQ/gviz/tq?tqx=out:json`)).text(),t=e.indexOf(`{`),n=e.lastIndexOf(`}`),r=JSON.parse(e.substring(t,n+1))?.table?.rows||[];console.log(`TOTAL RAW ROWS:`,r.length),f=r.map((e,t)=>{let n=e.c||[];return{HDS_Code:n[0]?.v??`ROW_${t}`,Threads_Link:n[2]?.v??``,Outstanding_Paper:n[3]?.v??``,Status:n[4]?.v??``,Category:n[5]?.v??``,CategoryEN:n[6]?.v??``,Score:n[7]?.v??``,Title:n[10]?.v??n[1]?.v??`Untitled_${t}`,Image:n[11]?.v??``}}),console.log(`PARSED PAPERS:`,f.length)}catch(e){console.error(`initPapers failed:`,e),f=[{Title:`Fallback Paper A`,Score:`A`,Status:`offline`,Category:`test`}]}}function m(){return f}function h(){let e=m()||[],t=e.length;return`
    <section class="
      relative w-full flex items-center justify-center
      text-white py-24
    ">

      <!-- BACKGROUND -->
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="background-image:url('${d}')"
      ></div>

      <div class="absolute inset-0 bg-black/65"></div>

      <!-- CONTENT -->
      <div class="relative z-10 text-center max-w-3xl px-6">

        <!-- TITLE -->
        <h1 class="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          ${n(`heroTitle`)}
        </h1>

        <!-- DESCRIPTION (修成 i18n 可控) -->
        <p class="text-lg md:text-xl opacity-80 mb-4">
          ${n(`heroText`)}
        </p>

        <!-- COUNT (中英切換) -->
        <div class="mb-8 text-sm md:text-base opacity-70">
          ${i()===`zh`?`目前共有`:`More Than`}

          <span class="text-white text-2xl font-bold mx-1">
            ${t}
          </span>

          ${i()===`zh`?`筆研究樣本`:`Research Samples Over Here`}
        </div>

        <!-- SEARCH BAR -->
        <div class="
          flex gap-2 p-3
          bg-black/40 backdrop-blur-md
          border border-white/10
          rounded-2xl
          max-w-xl mx-auto
        ">

          <!-- CATEGORY (動態修復) -->
          <select class="
            p-2 rounded-lg
            bg-white/10 text-white
            border border-white/10
            outline-none
          ">
            <option value="ALL">
              ${i()===`zh`?`全部分類`:`All Categories`}
            </option>

            ${[...new Set(e.map(e=>e.Category).filter(Boolean))].map(e=>`<option value="${e}">${e}</option>`).join(``)}
          </select>

          <input
            class="
              flex-1 p-2 bg-transparent
              text-white placeholder-white/50
              outline-none
            "
            placeholder="${i()===`zh`?`搜尋研究樣本...`:`Search research samples...`}"
          />

          <button class="
            px-4 py-2 bg-white text-black
            rounded-lg font-medium hover:opacity-80 transition
          ">
            ${i()===`zh`?`搜尋`:`Search`}
          </button>

        </div>

        <!-- FOOTER -->
        <div class="mt-6 text-xs opacity-50 tracking-widest">
          CLASSIFIED RESEARCH ARCHIVE SYSTEM
        </div>

      </div>

    </section>
  `}function g(e){let t=e.HDS_Code||`***`;return`
    <div class="
      w-full max-w-sm mx-auto
      rounded-xl border overflow-hidden
      bg-[var(--card)] text-[var(--text)] border-[var(--border)]
      hover:shadow-lg transition
      flex flex-col
    ">

      <!-- HEADER -->
      <div class="
        flex justify-between items-center px-4 py-3
        border-b border-[var(--border)]
      ">

        <div class="font-mono text-xs opacity-70">
          HDS-${t}
        </div>

        <div class="
          text-xs px-2 py-1 rounded-full font-medium
          ${_(e.Status)}
        ">
          ${e.Status||`-`}
        </div>

      </div>

      <!-- SCP PREVIEW AREA -->
      <div class="
        h-36 flex items-center justify-center
        bg-[var(--bg)]
        text-[var(--text)]
        font-mono text-xs
      ">

        ${e.Image?`Preview`:`
              <div class="flex flex-col items-center justify-center gap-3 text-center">

                <!-- LOGO (適中大小，不再過大) -->
                <img 
                  src="/logo.png" 
                  class="w-20 h-20 opacity-60 object-contain"
                />

                <!-- CODE -->
                <div class="font-mono tracking-[0.3em] text-sm opacity-80">
                  HDS-${t}
                </div>

                <!-- CLASSIFIED LABEL -->
                <div class="text-[10px] opacity-50 uppercase tracking-widest mt-1">
                  classified document
                </div>

              </div>
            `}

      </div>

      <!-- BODY -->
      <div class="p-3 flex flex-col gap-2">

        <div class="font-semibold text-sm leading-snug">
          ${e.Title||`Untitled`}
        </div>

        <div class="flex items-center justify-between text-xs">

          <span class="
            px-2 py-1 rounded-full
            ${y(e.Category)}
          ">
            ${e.Category||`-`}
          </span>

          <span class="
            px-2 py-1 rounded-full font-semibold
            ${v(e.Score)}
          ">
            ${e.Score||`-`}
          </span>

        </div>

        <div class="flex flex-col gap-2 mt-2">

          ${e.Outstanding_Paper?`<a href="${e.Outstanding_Paper}" target="_blank"
                   class="
                     text-center text-xs px-2 py-1 border rounded
                     bg-[var(--card)] border-[var(--border)]
                     hover:opacity-80 transition
                   ">
                   Paper
                 </a>`:``}

          ${e.Threads_Link?`<a href="${e.Threads_Link}" target="_blank"
                   class="
                     text-center text-xs px-2 py-1 border rounded
                     bg-[var(--card)] border-[var(--border)]
                     hover:opacity-80 transition
                   ">
                   Discussion
                 </a>`:``}

        </div>

      </div>
    </div>
  `}function _(e){switch((e||``).toLowerCase()){case`available`:return`bg-green-100 text-green-700`;case`eliminate`:return`bg-red-100 text-red-700`;default:return`bg-gray-100 text-gray-700`}}function v(e){switch(e){case`A+`:return`bg-yellow-200 text-yellow-900 font-bold`;case`A`:return`bg-emerald-100 text-emerald-700`;case`B`:return`bg-blue-100 text-blue-700`;case`C`:return`bg-amber-100 text-amber-700`;default:return`bg-gray-100 text-gray-700`}}function y(e){let t=(e||``).toLowerCase();return t.includes(`bias`)?`bg-purple-100 text-purple-700`:t.includes(`disinformation`)?`bg-pink-100 text-pink-700`:t.includes(`eliminate`)?`bg-red-100 text-red-700`:`bg-gray-100 text-gray-700`}var b={search:``,category:`ALL`,score:`ALL`,status:`ALL`,sort:`newest`,page:1,pageSize:12},x=!1,S=!1,C=null;function w(){return x||(x=!0,queueMicrotask(E)),T()}function T(){return`
    <section class="
      p-6
      text-[var(--text)]
      bg-[var(--bg)]
      max-w-7xl mx-auto min-h-screen
    ">

      <h2 class="text-3xl font-bold mb-1">Research Papers</h2>
      <p class="text-sm opacity-60 mb-6">
        Browse research papers dataset
      </p>

      <div class="
        bg-[var(--card)]
        border border-[var(--border)]
        rounded-2xl p-5 mb-6
        shadow-sm
      ">

        <div class="
          flex flex-col md:flex-row
          md:items-center md:justify-between
          gap-3
        ">

          <button id="sortBtn"
            class="
              px-3 py-2 border rounded-lg text-sm
              bg-[var(--card)]
              text-[var(--text)]
              border-[var(--border)]
              hover:opacity-80 transition
              flex items-center gap-2
            ">
          </button>

          <input id="search"
            class="w-full md:max-w-md px-3 py-2 border rounded-lg text-sm
                   bg-[var(--card)] border-[var(--border)]"
            placeholder="Search papers..."
          />

          <div class="flex flex-wrap gap-2">

            <select id="category"
              class="px-3 py-2 border rounded-lg text-sm
                     bg-[var(--card)] border-[var(--border)]">
              <option value="ALL">All Categories</option>
            </select>

            <select id="status"
              class="px-3 py-2 border rounded-lg text-sm
                     bg-[var(--card)] border-[var(--border)]">
              <option value="ALL">All Status</option>
            </select>

            <select id="score"
              class="px-3 py-2 border rounded-lg text-sm
                     bg-[var(--card)] border-[var(--border)]">
              <option value="ALL">All Scores</option>
            </select>

          </div>

        </div>

        <div id="papers-status" class="text-xs opacity-60 mt-3"></div>
      </div>

      <div id="list" class="
        grid gap-6
        grid-cols-[repeat(auto-fill,minmax(260px,1fr))]
      "></div>

      <div id="pagination" class="flex gap-2 mt-8 justify-center"></div>

    </section>
  `}async function E(){await p(),D(),k(),N()}function D(){S||(S=!0,O(),A(),j(),window.addEventListener(`themeChange`,N),window.addEventListener(`languageChange`,N))}function O(){let e=document.getElementById(`search`);e&&(e.oninput=e=>{clearTimeout(C),C=setTimeout(()=>{b.search=e.target.value.toLowerCase(),b.page=1,N()},150)})}function k(){let e=m();t(`category`,`Category`),t(`score`,`Score`),t(`status`,`Status`);function t(t,n){let r=document.getElementById(t);r&&[...new Set(e.map(e=>e[n]).filter(Boolean))].forEach(e=>{let t=document.createElement(`option`);t.value=e,t.innerText=e,r.appendChild(t)})}}function A(){let e=(e,t)=>{let n=document.getElementById(e);n&&(n.onchange=e=>{b[t]=e.target.value,b.page=1,N()})};e(`category`,`category`),e(`score`,`score`),e(`status`,`status`)}function j(){let e=document.getElementById(`sortBtn`);e&&(e.onclick=()=>{b.sort=b.sort===`newest`?`oldest`:`newest`,N()})}function M(){let e=m();return b.category!==`ALL`&&(e=e.filter(e=>e.Category===b.category)),b.status!==`ALL`&&(e=e.filter(e=>e.Status===b.status)),b.score!==`ALL`&&(e=e.filter(e=>(e.Score||``).startsWith(b.score))),b.search&&(e=e.filter(e=>(e.Title||``).toLowerCase().includes(b.search))),e=e.slice().sort((e,t)=>{let n=Number(e.HDS_Code),r=Number(t.HDS_Code);return b.sort===`newest`?r-n:n-r}),e}function N(){let e=document.getElementById(`list`),t=document.getElementById(`papers-status`);if(!e)return;let n=M(),r=Math.max(1,Math.ceil(n.length/b.pageSize));b.page>r&&(b.page=1);let i=(b.page-1)*b.pageSize;e.innerHTML=n.slice(i,i+b.pageSize).map(g).join(``),t&&(t.innerText=`Loaded ${n.length} papers | Page ${b.page} / ${r}`),F(r),P()}function P(){let e=document.getElementById(`sortBtn`);e&&(e.innerHTML=`
    <span class="flex items-center gap-2">
      <span>Sort:</span>
      <span class="font-semibold flex items-center gap-1">
        ${b.sort===`newest`?`⬇️ Newest First`:`⬆️ Oldest First`}
      </span>
    </span>
  `)}function F(e){let t=document.getElementById(`pagination`);t&&(t.innerHTML=I(b.page,e).map(e=>e===`...`?`<span class="px-2 opacity-50">...</span>`:`
      <button class="
        px-3 py-1 border rounded-lg
        bg-[var(--card)]
        text-[var(--text)]
        border-[var(--border)]
        hover:opacity-80 transition
        ${e===b.page?`font-bold`:`opacity-70`}
      ">
        ${e}
      </button>
    `).join(``),t.querySelectorAll(`button`).forEach(e=>{e.onclick=()=>{b.page=Number(e.innerText),N()}}))}function I(e,t){let n=[],r=Math.max(1,e-4),i=Math.min(t,e+4);r>1&&(n.push(1),r>2&&n.push(`...`));for(let e=r;e<=i;e++)n.push(e);return i<t&&(i<t-1&&n.push(`...`),n.push(t)),n}function L(){return`
    <footer class="
      bg-[var(--bg)]
      text-[var(--text)]
      border-t border-[var(--border)]
      mt-16
    ">

      <div class="
        max-w-6xl mx-auto px-6 py-14
        grid grid-cols-1 md:grid-cols-4 gap-12
      ">

        <!-- BRAND -->
        <div>
          <h3 class="text-lg font-bold">THDRC</h3>
          <p class="text-sm opacity-70 mt-3 leading-relaxed">
            Research samples and analysis for understanding human diversity in Taiwan.
          </p>
        </div>

        <!-- RESEARCH -->
        <div>
          <h4 class="font-semibold mb-3">Research</h4>
          <ul class="space-y-2 text-sm opacity-70">
            <li class="hover:opacity-100 cursor-pointer">Sample Catalogue</li>
            <li class="hover:opacity-100 cursor-pointer">Categories</li>
            <li class="hover:opacity-100 cursor-pointer">Latest Papers</li>
            <li class="hover:opacity-100 cursor-pointer">Data Insights</li>
          </ul>
        </div>

        <!-- ABOUT -->
        <div>
          <h4 class="font-semibold mb-3">About</h4>
          <ul class="space-y-2 text-sm opacity-70">
            <li class="hover:opacity-100 cursor-pointer">Our Mission</li>
            <li class="hover:opacity-100 cursor-pointer">Research Team</li>
            <li class="hover:opacity-100 cursor-pointer">Publications</li>
            <li class="hover:opacity-100 cursor-pointer">Careers</li>
          </ul>
        </div>

        <!-- CONTACT -->
        <div>
          <h4 class="font-semibold mb-3">Contact</h4>
          <ul class="space-y-2 text-sm opacity-70">
            <li class="hover:opacity-100 cursor-pointer">Email Us</li>
            <li class="hover:opacity-100 cursor-pointer">Collaborate</li>
            <li class="hover:opacity-100 cursor-pointer">GitHub</li>
            <li class="hover:opacity-100 cursor-pointer">Support</li>
          </ul>
        </div>

      </div>

      <!-- BOTTOM BAR -->
      <div class="border-t border-[var(--border)]">
        <div class="max-w-6xl mx-auto px-6 py-5 text-center text-xs opacity-60">
          © 2026 THDRC. All rights reserved.
        </div>
      </div>

    </footer>
  `}var R=`theme`;function z(){let e=localStorage.getItem(R),t=window.matchMedia(`(prefers-color-scheme: dark)`).matches,n=e?e===`dark`:t;document.documentElement.classList.toggle(`dark`,n),localStorage.setItem(R,n?`dark`:`light`)}function B(e,t){let n=document.querySelector(e);if(!n){console.warn(`[mount] target not found: ${e}`);return}n.innerHTML=t}function V(){console.log(`🚀 App rendering...`),B(`#navbar`,o()),B(`#hero`,h()),B(`#papers-root`,w()),B(`#footer`,L())}function H(){z(),V()}window.addEventListener(`languageChange`,V),window.addEventListener(`themeChange`,V),H();