const display=document.querySelector('.display');
let grid=[];
for (let i=0;i<256;i++){
    grid[i]= document.createElement('div');
    grid[i].setAttribute('style','width: 40px; height: 40px; background-color: black; border: 1px solid red;');
    grid[i].classList.add('panels');
    display.appendChild(grid[i]);
    
}

function change(e){
    e.target.setAttribute('style','width: 40px; height: 40px; background-color: blue; border: 1px solid red;');
}

const panels= document.querySelectorAll('.panels');
panels.forEach(panel => panel.addEventListener('mouseover', change));