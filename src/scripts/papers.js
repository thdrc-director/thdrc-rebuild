export function renderPapers(){

const grid =
document.querySelector("#paperGrid");


grid.innerHTML =
papersData.map(p=>`

<div class="
border rounded-xl
bg-white
">

<div class="p-4">

<b>
HDS-${p.HDS_Code}
</b>

<span>
${p.Score}
</span>


<h3>
${p.Title}
</h3>


<p>
${p.Category}
</p>


<a href="${p.Outstanding_Paper}">
📄 Paper
</a>


<br>


<a href="${p.Threads_Link}">
💬 Discussion
</a>


</div>

</div>


`).join("");

}