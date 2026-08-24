import { JSDOM } from "jsdom"
import fs from "node:fs"

const html=fs.readFileSync("dist/index.html","utf8")
const jsF=fs.readdirSync("dist/assets").find(f=>f.startsWith("index-")&&f.endsWith(".js"))
let pass=0,fail=0
const ck=(n,c)=>{c?pass++:fail++;console.log(`${c?"✓":"✗ FAIL"} ${n}`)}

const dom=new JSDOM(html,{url:"https://x.io/t/#/home",runScripts:"outside-only",pretendToBeVisual:true})
const w=dom.window
w.matchMedia||=()=>({matches:false}); w.scrollTo=()=>{}
w.localStorage.setItem("lang","en")
w.fetch=async()=>({text:async()=>"{})"})
w.eval(fs.readFileSync("dist/assets/"+jsF,"utf8"))
await new Promise(r=>setTimeout(r,300))
const d=w.document

// 結構驗證（jsdom 不做實際排版，寬度行為以 class 斷點推理）
const box=d.getElementById("hero-box")
ck("#hero-box max-w-5xl", box?.className.includes("max-w-5xl"))
ck("#hero-box 不再有 max-w-3xl", !box?.className.includes("max-w-3xl"))
ck("#hero-box 保留 w-full + px", box?.className.includes("w-full") && box?.className.includes("px-5 sm:px-6"))

const p=d.querySelector("#hero-box p")
ck("<p> 三段式寬度", p?.className.includes("max-w-xl sm:max-w-2xl lg:max-w-3xl"))

const h1=d.querySelector("#hero-box h1")
ck("<h1> text-balance 保留", h1?.className.includes("text-balance"))
ck("<h1> 尺寸斷點不變", h1?.className.includes("text-[2rem]") && h1?.className.includes("sm:text-5xl") && h1?.className.includes("lg:text-6xl"))

// 其他區塊未被波及
ck("CTA 按鈕存在", !!d.querySelector('a[href="#/research"]') && !!d.querySelector('a[href="#/about"]'))
ck("計數元素存在", !!d.getElementById("hero-count"))
ck("底部 tabbar 未受影響", d.querySelectorAll("nav[aria-label='Primary'] a").length===3)
ck("英文副標句號分段保留", /Taiwan\.<br>/.test(p?.innerHTML||""))

console.log(`===== ${pass} passed, ${fail} failed =====`)
