const displayDiv=document.querySelector('.display');
let grid=[];

function getTileNumber(resolution){
    tiles=(600/resolution)**2;
    console.log(tiles);
    return;

}

for (let i=0;i<625;i++){
    grid[i]= document.createElement('div');
    grid[i].classList.add('panels');
    grid[i].classList.add('panels');
    displayDiv.appendChild(grid[i]);
    
}

let pen='active';

function change(e){
    e.target.classList.add(pen);
}
function changemove(e){
    if (mousedown){
        e.target.classList.add(pen);
    }
}

function clear(){
    panels.forEach(panel => panel.classList.remove('active'));
    pen='active';
}



let mousedown=false;
const panels= document.querySelectorAll('.panels');
panels.forEach(panel => panel.addEventListener('click',change));
panels.forEach(panel => panel.addEventListener('mousedown', () => mousedown=true));
panels.forEach(panel => panel.addEventListener('mouseup', () => mousedown=false));
const page=document.querySelector('.page');
page.addEventListener('mouseup', () => mousedown=false);
panels.forEach(panel => panel.addEventListener('mousemove', changemove));


clearbutton=document.querySelector('.clearbutton');
clearbutton.addEventListener('click',clear);

eraser=document.querySelector('.eraser');
console.log(eraser);
eraser.addEventListener('click', () => pen='inactive');