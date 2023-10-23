let panel=document.querySelector(".panel");
let w=document.querySelector("window");
let sideLength=16;

let clicked=false;
window.addEventListener("mouseup",()=>{clicked=false});
for(let i=0;i<sideLength;i++){
let row=document.createElement('div');
row.setAttribute("class","row");
    for(let j=0;j<sideLength;j++){
        let pixel=document.createElement('div');
        pixel.setAttribute("class","pixel");
        row.appendChild(pixel);
        pixel.addEventListener("mousedown",(e)=>{clicked=true;e.preventDefault();});
        pixel.addEventListener("mouseover", changeColor);
        pixel.addEventListener("mouseup",()=>{clicked=false});

    }
    panel.appendChild(row);
}

function changeColor(e){
    if(clicked)e.target.setAttribute("style", "background-color: yellow;");
}