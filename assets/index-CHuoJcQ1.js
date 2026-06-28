(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/thdrc-rebuild/assets/logo-CVNcmIiR.png`,t=localStorage.getItem(`lang`)||`en`,n={en:{home:`Home`,research:`Research`,about:`About Us`,language:`English`,heroTitle:`Taiwan Human Diversity Research Center`,heroText:`Comprehensive analysis of human diversity patterns in Taiwan. Explore behavioral studies, social phenomena, and research insights.`,aboutTitle:`About This Archive`,aboutMission:`Our Mission`,aboutMissionText:`The Taiwan Human Diversity Research Center (THDRC) maintains this research archive to document and analyze human diversity patterns in Taiwan through behavioral studies, social phenomena, and systematic research.`,aboutWhatTitle:`What's Included`,aboutWhatDesc:`This archive contains research samples organized by category, status, and quality score. Each entry includes metadata, links to full papers, and discussion threads for community engagement.`,featureDatabase:`Research Database`,featureDatabaseDesc:`Browse curated research papers with detailed metadata and categorization`,featureBilingual:`Bilingual Interface`,featureBilingualDesc:`Full English and Chinese language support with seamless switching`,featureTheme:`Dark Mode`,featureThemeDesc:`Light and dark themes for comfortable reading day or night`,aboutDataTitle:`Data & Methodology`,aboutDataDesc:`Research samples are systematically collected and categorized. Each entry is assigned a quality score (A+, A, B, C) and status indicator (Available / Eliminate) to help researchers evaluate relevance.`,aboutAttribution:`Data sourced from THDRC research collections and updated regularly.`},zh:{home:`首頁`,research:`研究`,about:`關於我們`,language:`中文`,heroTitle:`台灣人類多樣性研究中心`,heroText:`透過行為研究與社會現象分析，探索台灣人類多樣性的研究成果。`,aboutTitle:`關於本資料庫`,aboutMission:`我們的使命`,aboutMissionText:`台灣人類多樣性研究中心（THDRC）建立本研究資料庫，透過行為研究、社會現象分析與系統性研究，記錄並分析台灣人類多樣性模式。`,aboutWhatTitle:`資料庫內容`,aboutWhatDesc:`本資料庫收錄依領域、狀態與品質評分分類的研究樣本。每筆資料包含詳細元數據、論文全文連結及社群討論串。`,featureDatabase:`研究資料庫`,featureDatabaseDesc:`瀏覽經過篩選的研究論文，附詳細元數據與分類`,featureBilingual:`雙語介面`,featureBilingualDesc:`完整支援中英文雙語，一鍵切換`,featureTheme:`深色模式`,featureThemeDesc:`淺色與深色主題，日夜閱讀舒適`,aboutDataTitle:`資料與研究方法`,aboutDataDesc:`研究樣本經過系統性收集與分類。每筆資料皆標示品質評分（A+、A、B、C）與狀態（Available / Eliminate），協助研究者評估相關性。`,aboutAttribution:`資料來源：THDRC 研究資料集，定期更新。`}};function r(e){return n[t]?.[e]||e}function i(){t=t===`en`?`zh`:`en`,localStorage.setItem(`lang`,t),window.dispatchEvent(new Event(`languageChange`))}function a(){return t}var o=`theme`;function s(){return setTimeout(c,0),`
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
        <a href="#/home" class="hover:opacity-70">${r(`home`)}</a>
        <a href="#/research" class="hover:opacity-70">${r(`research`)}</a>
        <a href="#/about" class="hover:opacity-70">${r(`about`)}</a>
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
  `}var f=`/thdrc-rebuild/assets/hero-B92wop4K.jpg`,p=[];async function m(){try{let e=await(await fetch(`https://docs.google.com/spreadsheets/d/10o7VVWl4Axa67edzlpsxjMIEeTGFnxzi2kDOJS6eHZQ/gviz/tq?tqx=out:json`)).text(),t=e.indexOf(`{`),n=e.lastIndexOf(`}`),r=JSON.parse(e.substring(t,n+1))?.table?.rows||[];console.log(`TOTAL RAW ROWS:`,r.length),p=r.map((e,t)=>{let n=e.c||[];return{HDS_Code:n[0]?.v??`ROW_${t}`,Threads_Link:n[2]?.v??``,Outstanding_Paper:n[3]?.v??``,Status:n[4]?.v??``,Category:n[5]?.v??``,CategoryEN:n[6]?.v??``,Score:n[7]?.v??``,Title:n[10]?.v??n[1]?.v??`Untitled_${t}`,Image:n[11]?.v??``}}),console.log(`PARSED PAPERS:`,p.length)}catch(e){console.error(`initPapers failed:`,e),p=[{Title:`Fallback Paper A`,Score:`A`,Status:`offline`,Category:`test`}]}}function h(){return p}function g(){let e=(h()||[]).length,t=a()===`zh`;return setTimeout(()=>{_()},100),setTimeout(()=>{y(e)},900),`
<section
class="
relative
w-full
flex
items-center
justify-center

text-white

py-24

overflow-hidden
"
>


<div
class="
absolute
inset-0
bg-cover
bg-center
"
style="background-image:url('${f}')"
></div>



<div
class="
absolute
inset-0
bg-black/65
"
></div>






<div
id="hero-box"
class="
relative
z-10

flex
flex-col
items-center

text-center

w-full
max-w-3xl

px-6

opacity-0
translate-y-4

transition-all
duration-[1400ms]
ease-out
"
>





<h1
class="
font-bold

mb-6

tracking-tight

text-3xl
sm:text-4xl
md:text-6xl

whitespace-nowrap
"
>

${r(`heroTitle`)}

</h1>







<p
class="
text-lg
md:text-xl

opacity-80

mb-4
"
>

${r(`heroText`)}

</p>









<div
class="
mb-8

text-sm
md:text-base

opacity-70

whitespace-nowrap
"
>


${t?`目前共有`:`More Than`}



<span
id="hero-count"
class="
text-white

text-2xl

font-bold

mx-1

tabular-nums
"
>
0
</span>



${t?`筆研究樣本`:`Research Samples Over Here`}



</div>


















<div

class="
mt-6

text-xs

opacity-50

tracking-normal

whitespace-nowrap

text-center
"

>


${t?`台灣人類多樣性研究中心`:`Taiwan Human Diversity Research Center`}


</div>








</div>


</section>
`}function _(){let e=document.getElementById(`hero-box`);e&&requestAnimationFrame(()=>{e.classList.remove(`opacity-0`,`translate-y-4`),e.classList.add(`opacity-100`,`translate-y-0`)})}function v(e){return e===1?1:1-2**(-10*e)}function y(e){let t=document.getElementById(`hero-count`);if(!t)return;let n=performance.now();function r(i){let a=Math.min((i-n)/1800,1);t.textContent=Math.floor(e*v(a)).toLocaleString(),a<1?requestAnimationFrame(r):t.textContent=e.toLocaleString()}requestAnimationFrame(r)}var b=`/thdrc-rebuild/assets/director-DG6dCxlH.png`,x=`/thdrc-rebuild/assets/thdrc_administration-building-NdksYf7c.png`,S=`/thdrc-rebuild/assets/threads-yrbCapJs.png`,C=`/thdrc-rebuild/assets/discord-DGt7Cphn.png`;function ee(){let e=a()===`zh`;return setTimeout(()=>{let e=document.getElementById(`about`);e&&requestAnimationFrame(()=>{e.classList.remove(`opacity-0`,`translate-y-6`),e.classList.add(`opacity-100`,`translate-y-0`)})},100),setTimeout(()=>{let e=document.getElementById(`director-text`),t=document.getElementById(`history-text`);e&&T(e,e.dataset.text||``),t&&T(t,t.dataset.text||``)},400),`
<section
id="about"
class="
opacity-0 translate-y-6 transition-all duration-1000 ease-out
py-16 md:py-24
bg-[var(--bg)] text-[var(--text)]
"
>

<div class="max-w-5xl mx-auto px-4 md:px-6">

  <!-- HEADER -->
  <div class="
    text-center mb-12 md:mb-16
  ">

    <h2 class="
      text-3xl md:text-4xl font-bold mb-4
    ">
      ${r(`aboutTitle`)}
    </h2>

    <div class="
      w-16 h-1 mx-auto rounded-full
      bg-[var(--text)] opacity-20
    "></div>

  </div>

  <!-- DIRECTOR -->
  <div class="
    p-8 md:p-10 mb-10
    rounded-2xl
    bg-[var(--card)]
    border border-[var(--border)]
    shadow-sm
  ">
    <h3 class="text-lg font-semibold mb-3 tracking-wide">
      ${e?`中心主任`:`Director`}
    </h3>
    <div class="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
      <img src="${b}" alt="Director" class="w-full md:w-48 h-auto object-cover rounded-lg" />
      <p
        id="director-text"
        data-text="${e?`本中心由一位具備深厚人類學研究背景的學者領導，長期投入於田野調查與族群研究工作，致力於推動台灣人群多樣性的學術研究與資料整合。其研究關注文化差異、族群互動與社會結構之間的關聯，並同時將研究成果延伸至公共議題與社會實踐，促進更全面的理解與對話。`:`The center is led by a scholar with extensive anthropological research experience, dedicated to advancing academic inquiry and social practice regarding Taiwan's ethnic diversity.`}"
        class="leading-relaxed opacity-80 text-base md:text-lg"
      ></p>
    </div>
  </div>

  <!-- HISTORY -->
  <div class="
    p-8 md:p-10 mb-10
    rounded-2xl
    bg-[var(--card)]
    border border-[var(--border)]
    shadow-sm
  ">
    <h3 class="text-lg font-semibold mb-3 tracking-wide">
      ${e?`建築沿革`:`History`}
    </h3>
    <div class="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
      <img src="${x}" alt="THDRC Building" class="w-full md:w-48 h-auto object-cover rounded-lg" />
      <p
        id="history-text"
        data-text="${e?`本中心的行政大樓歷經多年規劃與設計，最終於 2025 年正式落成啟用。其建置過程凝聚了長期的研究發展需求與制度性規劃，象徵中心在研究能量與組織規模上的穩定成長。隨著大樓啟用，本中心也進一步強化資料整合與跨領域研究的基礎，持續推動台灣人類多樣性研究的深化與延展。`:`The center's administration building was completed after years of planning and officially inaugurated in 2025.`}"
        class="leading-relaxed opacity-80 text-base md:text-lg"
      ></p>
    </div>
  </div>

  <!-- MISSION -->
  <div class="
    p-8 md:p-10 mb-10
    rounded-2xl
    bg-[var(--card)]
    border border-[var(--border)]
    shadow-sm
  ">

    <h3 class="
      text-lg font-semibold mb-3
      tracking-wide
    ">
      ${r(`aboutMission`)}
    </h3>

    <p class="
      leading-relaxed opacity-80
      text-base md:text-lg
    ">
      ${r(`aboutMissionText`)}
    </p>

  </div>

  <!-- WHAT'S INCLUDED -->
  <div class="mb-10">

    <h3 class="
      text-xl font-semibold mb-4
    ">
      ${r(`aboutWhatTitle`)}
    </h3>

    <p class="
      leading-relaxed opacity-70
      mb-6 max-w-3xl
    ">
      ${r(`aboutWhatDesc`)}
    </p>

  </div>

  <!-- FEATURE CARDS -->
  <div class="
    grid grid-cols-1 md:grid-cols-3 gap-4
    mb-10
  ">

    ${w(`📚`,r(`featureDatabase`),r(`featureDatabaseDesc`))}

    ${w(`🌐`,r(`featureBilingual`),r(`featureBilingualDesc`))}

    ${w(`🌙`,r(`featureTheme`),r(`featureThemeDesc`))}

  </div>

  <!-- DATA & METHODOLOGY -->
  <div class="
    p-8 md:p-10 mb-10
    rounded-2xl
    bg-[var(--card)]
    border border-[var(--border)]
    shadow-sm
  ">

    <h3 class="
      text-lg font-semibold mb-3
    ">
      ${r(`aboutDataTitle`)}
    </h3>

    <p class="
      leading-relaxed opacity-80
      text-base md:text-lg
    ">
      ${r(`aboutDataDesc`)}
    </p>

  </div>

  <!-- SOCIAL HUB -->
  <div class="mt-10 p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)]">

    <h3 class="text-lg font-semibold mb-4">
      ${e?`社群平台`:`Social Hub`}
    </h3>

    <div class="flex flex-col sm:flex-row gap-3">

      <a
        href="https://www.threads.com/@thdrc_director"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-3 px-4 py-3 rounded-xl bg-black/20 hover:bg-black/30 transition"
      >
        <img src="${S}" class="w-5 h-5" />
        <span>Threads</span>
      </a>

      <a
        href="https://discord.gg/heMFtgA69y"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-3 px-4 py-3 rounded-xl bg-black/20 hover:bg-black/30 transition"
      >
        <img src="${C}" class="w-5 h-5" />
        <span>Discord Community</span>
      </a>

    </div>

  </div>

  <!-- ATTRIBUTION -->
  <div class="
    text-center
    text-xs opacity-50
    pt-6
    border-t border-[var(--border)]
  ">
    ${r(`aboutAttribution`)}
  </div>


</div>

</section>
  `}function w(e,t,n){return`
    <div class="
      p-6 rounded-xl
      bg-[var(--card)]
      border border-[var(--border)]
      hover:shadow-md transition
      flex flex-col items-start gap-3
    ">
      <span class="text-3xl">${e}</span>

      <h4 class="font-semibold">${t}</h4>

      <p class="text-sm opacity-70 leading-relaxed">
        ${n}
      </p>
    </div>
  `}function T(e,t,n=18){if(!e)return;let r=0;e.textContent=``;function i(){r<t.length&&(e.textContent+=t[r],r++,setTimeout(i,n))}i()}function E(t){let n=t.HDS_Code||`***`;return`
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
          ${D(t.Status)}
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
            ${k(t.Category)}
          ">
            ${t.Category||`-`}
          </span>

          <span class="
            px-2 py-1 rounded-full font-semibold
            ${O(t.Score)}
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
  `}function D(e){switch((e||``).toLowerCase()){case`available`:return`bg-green-100 text-green-700`;case`eliminate`:return`bg-red-100 text-red-700`;default:return`bg-gray-100 text-gray-700`}}function O(e){switch(e){case`A+`:return`bg-yellow-200 text-yellow-900 font-bold`;case`A`:return`bg-emerald-100 text-emerald-700`;case`B`:return`bg-blue-100 text-blue-700`;case`C`:return`bg-amber-100 text-amber-700`;default:return`bg-gray-100 text-gray-700`}}function k(e){let t=(e||``).toLowerCase();return t.includes(`bias`)?`bg-purple-100 text-purple-700`:t.includes(`disinformation`)?`bg-pink-100 text-pink-700`:t.includes(`eliminate`)?`bg-red-100 text-red-700`:`bg-gray-100 text-gray-700`}var A={search:``,category:`ALL`,score:`ALL`,status:`ALL`,sort:`newest`,page:1,pageSize:12},j=!1,M=!1,N=null;function P(){return j?(M=!1,queueMicrotask(I)):(j=!0,queueMicrotask(I)),F()}function F(){return`
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
  `}async function I(){await m(),K(),queueMicrotask(()=>{L(),z(),W()})}function L(){M||(M=!0,R(),te(),B(),V(),H(),U(),window.addEventListener(`themeChange`,K),window.addEventListener(`languageChange`,K))}function R(){let e=document.getElementById(`search`);e&&(e.oninput=e=>{clearTimeout(N),N=setTimeout(()=>{A.search=e.target.value.toLowerCase(),A.page=1,K()},150)})}function z(){let e=h();t(`category`,`Category`),t(`status`,`Status`),t(`score`,`Score`);function t(t,n){let r=document.getElementById(t);r&&(r.querySelectorAll(`option:not([value='ALL'])`).forEach(e=>e.remove()),[...new Set(e.map(e=>e[n]).filter(e=>e!=null&&e!==``).map(e=>String(e).trim()))].forEach(e=>{let t=document.createElement(`option`);t.value=e,t.textContent=e,r.appendChild(t)}))}}function te(){let e=(e,t)=>{let n=document.getElementById(e);n&&(n.onchange=e=>{A[t]=e.target.value,A.page=1,K()})};e(`category`,`category`),e(`status`,`status`),e(`score`,`score`)}function B(){let e=document.getElementById(`sortBtn`);e&&(e.onclick=()=>{A.sort=A.sort===`newest`?`oldest`:`newest`,K()})}function V(){let e=document.getElementById(`hero-category`);e&&(e.onchange=e=>{A.category=e.target.value,A.page=1,K()})}function H(){let e=document.getElementById(`hero-search`);e&&(e.oninput=e=>{clearTimeout(N),N=setTimeout(()=>{A.search=e.target.value.toLowerCase(),A.page=1,K()},150)})}function U(){let e=document.getElementById(`hero-search-btn`);e&&(e.onclick=()=>{let e=document.getElementById(`hero-search`);e&&(A.search=e.value.toLowerCase(),A.page=1,K())})}function W(){let e=document.getElementById(`sortBtn`);e&&(e.innerHTML=`
    <span class="font-semibold">
      ⇅ ${A.sort===`newest`?`Newest`:`Oldest`}
    </span>
  `)}function G(){let e=h();return A.category!==`ALL`&&(e=e.filter(e=>e.Category===A.category)),A.status!==`ALL`&&(e=e.filter(e=>e.Status===A.status)),A.score!==`ALL`&&(e=e.filter(e=>(e.Score||``).startsWith(A.score))),A.search&&(e=e.filter(e=>(e.Title||``).toLowerCase().includes(A.search))),e.sort((e,t)=>{let n=Number(e.HDS_Code),r=Number(t.HDS_Code);return A.sort===`newest`?r-n:n-r})}function K(){let e=document.getElementById(`list`),t=document.getElementById(`papers-status`);if(!e)return;let n=G(),r=Math.max(1,Math.ceil(n.length/A.pageSize));A.page>r&&(A.page=1);let i=(A.page-1)*A.pageSize;e.innerHTML=n.slice(i,i+A.pageSize).map(E).join(``),t&&(t.textContent=`Loaded ${n.length} papers | Page ${A.page}/${r}`),q(r),W()}function q(e){let t=document.getElementById(`pagination`);t&&(t.innerHTML=J(A.page,e).map(e=>e===`...`?`<span class="px-2 opacity-50">...</span>`:`
      <button class="
        px-3 py-1 border rounded-lg
        bg-[var(--card)]
        border-[var(--border)]
        ${e===A.page?`font-bold`:`opacity-70`}
      ">
        ${e}
      </button>
    `).join(``),t.querySelectorAll(`button`).forEach(e=>{e.onclick=()=>{A.page=Number(e.textContent),K()}}))}function J(e,t){let n=[],r=Math.max(1,e-3),i=Math.min(t,e+3);r>1&&(n.push(1),r>2&&n.push(`...`));for(let e=r;e<=i;e++)n.push(e);return i<t&&(i<t-1&&n.push(`...`),n.push(t)),n}function Y(){return`
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
            <li><a href="https://www.threads.com/@thdrc_director" target="_blank" rel="noopener noreferrer" class="hover:opacity-100 cursor-pointer">THDRC Director</a></li>
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
  `}var X=`theme`;function Z(){let e=localStorage.getItem(X),t=window.matchMedia(`(prefers-color-scheme: dark)`).matches,n=e?e===`dark`:t;document.documentElement.classList.toggle(`dark`,n),localStorage.setItem(X,n?`dark`:`light`)}function Q(e,t){let n=document.querySelector(e);if(!n){console.warn(`[mount] target not found: ${e}`);return}n.innerHTML=t}var ne={home:g,research:P,about:ee};function $(){let e=ne[location.hash.replace(`#/`,``)||`home`]||g;Q(`#navbar`,s()),Q(`#page-content`,e()),Q(`#footer`,Y())}async function re(){Z(),await m(),$()}window.addEventListener(`hashchange`,$),window.addEventListener(`languageChange`,$),window.addEventListener(`themeChange`,$),re();