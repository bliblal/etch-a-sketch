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

function change(e){
    e.target.classList.add('active');
}
function changemove(e){
    if (mousedown){
        e.target.classList.add('active');
    }
}



let mousedown=false;
const panels= document.querySelectorAll('.panels');
panels.forEach(panel => panel.addEventListener('click',change));
panels.forEach(panel => panel.addEventListener('mousedown', () => mousedown=true));
panels.forEach(panel => panel.addEventListener('mouseup', () => mousedown=false));
const page=document.querySelector('.page');
page.addEventListener('mouseup', () => mousedown=false);
panels.forEach(panel => panel.addEventListener('mousemove', changemove));