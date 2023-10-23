let panel=document.querySelector(".panel");
let w=document.querySelector("window");
let sideLength=16;
createGrid(sideLength);

let changeButton=document.querySelector(".sideLength");
changeButton.addEventListener("click",()=>{sideLength=prompt(`Input Side Length <= 100`);createGrid(sideLength?sideLength:16);});

let clicked=false;
window.addEventListener("mouseup",()=>{clicked=false});
function createGrid(sideLength){
    if(sideLength>100){alert("Invalid Input");return;};
panel.innerHTML=null;
for(let i=0;i<sideLength;i++){
let row=document.createElement('div');
row.setAttribute("class","row");
    for(let j=0;j<sideLength;j++){
        let pixel=document.createElement('div');
        pixel.setAttribute("class","pixel");
        row.appendChild(pixel);
        pixel.addEventListener("mousedown",(e)=>{clicked=true;e.preventDefault();changeColor(e);});
        pixel.addEventListener("mouseover", changeColor);
        pixel.addEventListener("mouseup",()=>{clicked=false});

    }
    panel.appendChild(row);
}}

function changeColor(e){
    if(clicked)e.target.setAttribute("style", "background-color: yellow;");
}

