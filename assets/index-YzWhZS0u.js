(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/thdrc-rebuild/assets/logo-CVNcmIiR.png`,t=localStorage.getItem(`lang`)||`en`,n={en:{home:`Home`,research:`Research`,about:`About Us`,language:`English`,heroTitle:`Taiwan Human Diversity Research Center`,heroText:`Comprehensive analysis of human diversity patterns in Taiwan. Explore behavioral studies, social phenomena, and research insights.`},zh:{home:`首頁`,research:`研究`,about:`關於我們`,language:`中文`,heroTitle:`台灣人類多樣性研究中心`,heroText:`透過行為研究與社會現象分析，探索台灣人類多樣性的研究成果。`}};function r(e){return n[t]?.[e]||e}function i(){t=t===`en`?`zh`:`en`,localStorage.setItem(`lang`,t),window.dispatchEvent(new Event(`languageChange`))}function a(){return t}var o=`theme`;function s(){return setTimeout(c,0),`
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
          src="${e}"
          alt="logo"
          class="w-14 h-14 object-contain"
        />

        <span class="tracking-wide">THDRC</span>
      </div>

      <!-- NAV -->
      <nav class="flex gap-8 text-base font-medium">
        <a href="#home" class="hover:opacity-70">${r(`home`)}</a>
        <a href="#papers" class="hover:opacity-70">${r(`research`)}</a>
        <a href="#about" class="hover:opacity-70">${r(`about`)}</a>
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
          ${a().toUpperCase()}
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
  `}function c(){let e=document.getElementById(`themeBtn`),t=document.getElementById(`langBtn`);t&&(t.onclick=()=>{i(),window.dispatchEvent(new Event(`languageChange`))}),e&&(l(),e.onclick=()=>{u(),d(),window.dispatchEvent(new Event(`themeChange`))},d())}function l(){let e=localStorage.getItem(o);e===`dark`||!e&&window.matchMedia(`(prefers-color-scheme: dark)`).matches?document.documentElement.classList.add(`dark`):document.documentElement.classList.remove(`dark`)}function u(){let e=document.documentElement.classList.toggle(`dark`);localStorage.setItem(o,e?`dark`:`light`)}function d(){let e=document.getElementById(`themeBtn`);if(!e)return;let t=document.documentElement.classList.contains(`dark`);e.innerHTML=`
    <span class="text-2xl">
      ${t?`🌙`:`☀️`}
    </span>

    <span class="font-medium">
      ${t?`Dark`:`Light`}
    </span>
  `}var f=`/thdrc-rebuild/assets/hero-B92wop4K.jpg`;function p(e=0){return`
    <section class="
      relative w-full flex items-center justify-center
      text-white py-24
    ">

      <!-- BACKGROUND -->
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="background-image:url('${f}')"
      ></div>

      <div class="absolute inset-0 bg-black/65"></div>

      <!-- CONTENT -->
      <div class="relative z-10 text-center max-w-3xl px-6">

        <h1 class="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          ${r(`heroTitle`)}
        </h1>

        <p class="text-lg md:text-xl opacity-80 mb-4">
          ${r(`heroText`)}
        </p>

        <!-- COUNT -->
        <div class="mb-8 text-sm md:text-base opacity-70">

          ${a()===`zh`?`目前共有`:`More Than`}

          <span class="text-white text-2xl font-bold mx-1">
            ${e}
          </span>

          ${a()===`zh`?`筆研究樣本`:`Research Samples Over Here`}

        </div>

        <!-- SEARCH -->
        <div class="
          flex gap-2 p-3
          bg-black/40 backdrop-blur-md
          border border-white/10
          rounded-2xl
          max-w-xl mx-auto
        ">

          <select class="
            p-2 rounded-lg
            bg-white/10 text-white
            border border-white/10
            outline-none
          ">
            <option value="ALL">
              ${a()===`zh`?`全部分類`:`All Categories`}
            </option>
          </select>

          <input
            class="
              flex-1 p-2 bg-transparent
              text-white placeholder-white/50
              outline-none
            "
            placeholder="${a()===`zh`?`搜尋研究樣本...`:`Search research samples...`}"
          />

          <button class="
            px-4 py-2 bg-white text-black
            rounded-lg font-medium hover:opacity-80 transition
          ">
            ${a()===`zh`?`搜尋`:`Search`}
          </button>

        </div>

        <div class="mt-6 text-xs opacity-50 tracking-widest">
          CLASSIFIED RESEARCH ARCHIVE SYSTEM
        </div>

      </div>

    </section>
  `}var m=[];async function h(){try{let e=await(await fetch(`https://docs.google.com/spreadsheets/d/10o7VVWl4Axa67edzlpsxjMIEeTGFnxzi2kDOJS6eHZQ/gviz/tq?tqx=out:json`)).text(),t=e.indexOf(`{`),n=e.lastIndexOf(`}`),r=JSON.parse(e.substring(t,n+1))?.table?.rows||[];console.log(`TOTAL RAW ROWS:`,r.length),m=r.map((e,t)=>{let n=e.c||[];return{HDS_Code:n[0]?.v??`ROW_${t}`,Threads_Link:n[2]?.v??``,Outstanding_Paper:n[3]?.v??``,Status:n[4]?.v??``,Category:n[5]?.v??``,CategoryEN:n[6]?.v??``,Score:n[7]?.v??``,Title:n[10]?.v??n[1]?.v??`Untitled_${t}`,Image:n[11]?.v??``}}),console.log(`PARSED PAPERS:`,m.length)}catch(e){console.error(`initPapers failed:`,e),m=[{Title:`Fallback Paper A`,Score:`A`,Status:`offline`,Category:`test`}]}}function g(){return m}function _(t){let n=t.HDS_Code||`***`;return`
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
          HDS-${n}
        </div>

        <div class="
          text-xs px-2 py-1 rounded-full font-medium
          ${v(t.Status)}
        ">
          ${t.Status||`-`}
        </div>

      </div>

      <!-- IMAGE AREA -->
      <div class="
        h-36 flex items-center justify-center
        bg-[var(--bg)]
      ">

        ${t.Image?`
              <img 
                src="${t.Image}" 
                class="w-full h-full object-cover"
              />
            `:`
              <div class="flex flex-col items-center justify-center gap-3 text-center">

                <img 
                  src="${e}" 
                  class="w-20 h-20 opacity-60 object-contain"
                />

                <div class="font-mono tracking-[0.3em] text-sm opacity-80">
                  HDS-${n}
                </div>

                <div class="text-[10px] opacity-50 uppercase tracking-widest">
                  classified document
                </div>

              </div>
            `}

      </div>

      <!-- BODY -->
      <div class="p-3 flex flex-col gap-2">

        <div class="font-semibold text-sm leading-snug">
          ${t.Title||`Untitled`}
        </div>

        <div class="flex items-center justify-between text-xs">

          <span class="
            px-2 py-1 rounded-full
            ${b(t.Category)}
          ">
            ${t.Category||`-`}
          </span>

          <span class="
            px-2 py-1 rounded-full font-semibold
            ${y(t.Score)}
          ">
            ${t.Score||`-`}
          </span>

        </div>

        <div class="flex flex-col gap-2 mt-2">

          ${t.Outstanding_Paper?`<a href="${t.Outstanding_Paper}" target="_blank"
                   class="
                     text-center text-xs px-2 py-1 border rounded
                     bg-[var(--card)] border-[var(--border)]
                     hover:opacity-80 transition
                   ">
                   Paper
                 </a>`:``}

          ${t.Threads_Link?`<a href="${t.Threads_Link}" target="_blank"
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
  `}function v(e){switch((e||``).toLowerCase()){case`available`:return`bg-green-100 text-green-700`;case`eliminate`:return`bg-red-100 text-red-700`;default:return`bg-gray-100 text-gray-700`}}function y(e){switch(e){case`A+`:return`bg-yellow-200 text-yellow-900 font-bold`;case`A`:return`bg-emerald-100 text-emerald-700`;case`B`:return`bg-blue-100 text-blue-700`;case`C`:return`bg-amber-100 text-amber-700`;default:return`bg-gray-100 text-gray-700`}}function b(e){let t=(e||``).toLowerCase();return t.includes(`bias`)?`bg-purple-100 text-purple-700`:t.includes(`disinformation`)?`bg-pink-100 text-pink-700`:t.includes(`eliminate`)?`bg-red-100 text-red-700`:`bg-gray-100 text-gray-700`}var x={search:``,category:`ALL`,score:`ALL`,status:`ALL`,sort:`newest`,page:1,pageSize:12},S=!1,C=!1,w=null;function T(){return S||(S=!0,queueMicrotask(D)),E()}function E(){return`
    <section class="
      p-6 text-[var(--text)]
      bg-[var(--bg)]
      max-w-7xl mx-auto min-h-screen
    ">

      <h2 class="text-3xl font-bold mb-1">Research Papers</h2>
      <p class="text-sm opacity-60 mb-6">Browse research papers dataset</p>

      <div class="
        bg-[var(--card)]
        border border-[var(--border)]
        rounded-2xl p-5 mb-6 shadow-sm
      ">

        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

          <button id="sortBtn"
            class="px-3 py-2 border rounded-lg text-sm
                   bg-[var(--card)] border-[var(--border)]
                   hover:opacity-80 transition">
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
  `}async function D(){await h(),F(),queueMicrotask(()=>{O(),A(),N()})}function O(){C||(C=!0,k(),j(),M(),window.addEventListener(`themeChange`,F),window.addEventListener(`languageChange`,F))}function k(){let e=document.getElementById(`search`);e&&(e.oninput=e=>{clearTimeout(w),w=setTimeout(()=>{x.search=e.target.value.toLowerCase(),x.page=1,F()},150)})}function A(){let e=g();t(`category`,`Category`),t(`status`,`Status`),t(`score`,`Score`);function t(t,n){let r=document.getElementById(t);r&&(r.querySelectorAll(`option:not([value='ALL'])`).forEach(e=>e.remove()),[...new Set(e.map(e=>e[n]).filter(e=>e!=null&&e!==``).map(e=>String(e).trim()))].forEach(e=>{let t=document.createElement(`option`);t.value=e,t.textContent=e,r.appendChild(t)}))}}function j(){let e=(e,t)=>{let n=document.getElementById(e);n&&(n.onchange=e=>{x[t]=e.target.value,x.page=1,F()})};e(`category`,`category`),e(`status`,`status`),e(`score`,`score`)}function M(){let e=document.getElementById(`sortBtn`);e&&(e.onclick=()=>{x.sort=x.sort===`newest`?`oldest`:`newest`,F()})}function N(){let e=document.getElementById(`sortBtn`);e&&(e.innerHTML=`
    Sort:
    <span class="font-semibold">
      ${x.sort===`newest`?`⬇ Newest`:`⬆ Oldest`}
    </span>
  `)}function P(){let e=g();return x.category!==`ALL`&&(e=e.filter(e=>e.Category===x.category)),x.status!==`ALL`&&(e=e.filter(e=>e.Status===x.status)),x.score!==`ALL`&&(e=e.filter(e=>(e.Score||``).startsWith(x.score))),x.search&&(e=e.filter(e=>(e.Title||``).toLowerCase().includes(x.search))),e.sort((e,t)=>{let n=Number(e.HDS_Code),r=Number(t.HDS_Code);return x.sort===`newest`?r-n:n-r})}function F(){let e=document.getElementById(`list`),t=document.getElementById(`papers-status`);if(!e)return;let n=P(),r=Math.max(1,Math.ceil(n.length/x.pageSize));x.page>r&&(x.page=1);let i=(x.page-1)*x.pageSize;e.innerHTML=n.slice(i,i+x.pageSize).map(_).join(``),t&&(t.textContent=`Loaded ${n.length} papers | Page ${x.page}/${r}`),I(r)}function I(e){let t=document.getElementById(`pagination`);t&&(t.innerHTML=L(x.page,e).map(e=>e===`...`?`<span class="px-2 opacity-50">...</span>`:`
      <button class="
        px-3 py-1 border rounded-lg
        bg-[var(--card)]
        border-[var(--border)]
        ${e===x.page?`font-bold`:`opacity-70`}
      ">
        ${e}
      </button>
    `).join(``),t.querySelectorAll(`button`).forEach(e=>{e.onclick=()=>{x.page=Number(e.textContent),F()}}))}function L(e,t){let n=[],r=Math.max(1,e-3),i=Math.min(t,e+3);r>1&&(n.push(1),r>2&&n.push(`...`));for(let e=r;e<=i;e++)n.push(e);return i<t&&(i<t-1&&n.push(`...`),n.push(t)),n}function R(){return`
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
  `}var z=`theme`;function B(){let e=localStorage.getItem(z),t=window.matchMedia(`(prefers-color-scheme: dark)`).matches,n=e?e===`dark`:t;document.documentElement.classList.toggle(`dark`,n),localStorage.setItem(z,n?`dark`:`light`)}function V(e,t){let n=document.querySelector(e);if(!n){console.warn(`[mount] target not found: ${e}`);return}n.innerHTML=t}function H(){console.log(`🚀 App rendering...`),V(`#navbar`,s()),V(`#hero`,p()),V(`#papers-root`,T()),V(`#footer`,R())}function U(){B(),H()}window.addEventListener(`languageChange`,H),window.addEventListener(`themeChange`,H),U();