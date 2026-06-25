import heroImg from "../assets/hero.jpg"
import { t, getLang } from "../i18n.js"
import { getPapers } from "./papersLogic.js"


export default function Hero() {

  const papers = getPapers() || []
  const count = papers.length
  const isZh = getLang() === "zh"


  const categories = [
    ...new Set(
      papers
        .map((p) => p.Category)
        .filter(Boolean)
    ),
  ]


  setTimeout(() => {
    animateHero()
  }, 100)


  setTimeout(() => {
    animateCount(count)
  }, 900)



  return `
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
style="background-image:url('${heroImg}')"
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

${t("heroTitle")}

</h1>







<p
class="
text-lg
md:text-xl

opacity-80

mb-4
"
>

${t("heroText")}

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


${isZh ? "目前共有" : "More Than"}



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



${isZh ? "筆研究樣本" : "Research Samples Over Here"}



</div>









<div
class="
flex

flex-col

sm:flex-row


gap-2

p-3


bg-black/40

backdrop-blur-md


border

border-white/10


rounded-2xl


w-full

max-w-xl
"
>






<select
class="
p-2

rounded-lg

bg-white/10

text-white

border

border-white/10

outline-none

text-sm
"
>


<option value="ALL">

${isZh ? "全部分類" : "All Categories"}

</option>



${categories
.map(
(c) =>
`
<option value="${c}">
${c}
</option>
`
)
.join("")
}


</select>









<input

class="
flex-1

p-2

bg-transparent

text-white

placeholder-white/50

outline-none

text-sm
"

placeholder="${
isZh
? "搜尋研究樣本..."
: "Search research samples..."
}"

/>








<button

class="
px-4

py-2

bg-white

text-black


rounded-lg

font-medium


hover:opacity-80

transition


text-sm

whitespace-nowrap
"

>

${isZh ? "搜尋" : "Search"}

</button>





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


${
isZh
? "台灣人類多樣性研究中心"
: "Taiwan Human Diversity Research Center"
}


</div>








</div>


</section>
`

}









function animateHero() {

const el =
document.getElementById("hero-box")


if (!el) return



requestAnimationFrame(() => {


el.classList.remove(
"opacity-0",
"translate-y-4"
)


el.classList.add(
"opacity-100",
"translate-y-0"
)


})

}









function easeOutExpo(x) {

return x === 1
? 1
: 1 - Math.pow(2, -10 * x)

}









function animateCount(target) {


const el =
document.getElementById("hero-count")


if (!el) return



const duration = 1800

const start =
performance.now()






function update(now) {


const progress =
Math.min(
(now - start) / duration,
1
)





const value =
Math.floor(
target *
easeOutExpo(progress)
)





el.textContent =
value.toLocaleString()





if (progress < 1) {

requestAnimationFrame(update)

}

else {

el.textContent =
target.toLocaleString()

}

}





requestAnimationFrame(update)

}