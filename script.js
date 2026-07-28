const bow = document.getElementById("bow");
const arrow = document.getElementById("arrow");
const heart = document.getElementById("heart");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

const growHeart = document.getElementById("growHeart");
const wish = document.getElementById("wish");

const trunk = document.querySelector(".trunk");
const branches = document.getElementById("branches");
const leaves = document.getElementById("leaves");
const finalMessage = document.querySelector(".finalMessage");

let fired = false;

bow.onclick = function(){

if(fired) return;
fired = true;

/* Shoot Arrow */

arrow.style.left = "62%";
arrow.style.top = "43%";

/* Hit Heart */

setTimeout(()=>{

heart.style.transform="rotate(-45deg) scale(1.3)";
heart.style.background="#ff0033";

setTimeout(nextPage,1200);

},900);

};


/* ====================== */
/* PAGE 2 */
/* ====================== */

function nextPage(){

page1.classList.remove("active");
page2.classList.add("active");

let size = 0.3;

let grow = setInterval(()=>{

size += 0.03;

growHeart.style.transform =
`rotate(-45deg) scale(${size})`;

if(size>=3){

clearInterval(grow);

explode();

}

},40);

}


/* ====================== */
/* EXPLOSION */
/* ====================== */

function explode(){

growHeart.style.display="none";

for(let i=0;i<180;i++){

let p=document.createElement("div");

p.style.position="absolute";

p.style.width="10px";

p.style.height="10px";

p.style.background=
`hsl(${Math.random()*360},100%,60%)`;

p.style.borderRadius="50%";

p.style.left="50%";

p.style.top="45%";

page2.appendChild(p);

let x=(Math.random()-0.5)*900;
let y=(Math.random()-0.5)*700;

p.animate([

{
transform:"translate(0,0)",
opacity:1
},

{
transform:`translate(${x}px,${y}px)`,
opacity:0
}

],{

duration:1500

});

setTimeout(()=>{

p.remove();

},1600);

}

wish.style.opacity=1;

setTimeout(showTree,5000);

}


/* ====================== */
/* PAGE 3 */
/* ====================== */

function showTree(){

page2.classList.remove("active");
page3.classList.add("active");

/* Grow trunk */

trunk.style.height="220px";
trunk.style.width="34px";

/* Grow branches */

setTimeout(createBranches,1800);

}


/* ====================== */
/* BRANCHES */
/* ====================== */

function createBranches(){

const data=[

[0,0,-90],

[-20,-40,-40],

[20,-40,40],

[-45,-90,-20],

[45,-90,20],

[-70,-130,-35],

[70,-130,35],

[-15,-160,-70],

[15,-160,70]

];

data.forEach(b=>{

let line=document.createElement("div");

line.style.position="absolute";

line.style.left="190px";

line.style.bottom="0px";

line.style.width="6px";

line.style.height="90px";

line.style.background="#6b3e26";

line.style.transformOrigin="bottom";

line.style.transform=
`translate(${b[0]}px,${b[1]}px) rotate(${b[2]}deg)`;

branches.appendChild(line);

});

setTimeout(createLeaves,1000);

}


/* ====================== */
/* LEAVES */
/* ====================== */

function createLeaves(){

const colors=[
"#ff3366",
"#ff4444",
"#ff66cc",
"#ff9999",
"#ffcc00",
"#00ff99",
"#66ccff",
"#cc66ff"
];

for(let i=0;i<220;i++){

let leaf=document.createElement("div");

leaf.className="leaf";

leaf.style.left=Math.random()*400+"px";

leaf.style.top=Math.random()*280+"px";

leaf.style.background=
colors[Math.floor(Math.random()*colors.length)];

leaf.style.opacity=0;

leaf.style.transform=
`rotate(-45deg) scale(${0.5+Math.random()})`;

leaves.appendChild(leaf);

setTimeout(()=>{

leaf.style.transition="1s";

leaf.style.opacity=1;

},i*18);

}

setTimeout(()=>{

finalMessage.style.opacity=1;

},4500);

}
