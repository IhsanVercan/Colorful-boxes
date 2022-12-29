let colorList = ['red', 'blue', 'green', 'yellow', 'cyan','purple','gray', 'beige', 'orangered', 'pink'];

const buttonEl = document.querySelector('button');
let count = 1;
buttonEl.addEventListener('click', createBox);

function getRandomColor(){
    let getRamdom = Math.floor( Math.random() * colorList.length);
    return colorList[getRamdom]
    
}

function createBox(){
    const mainEl=document.querySelector('main')
    const boxEl = document.createElement('div');
    boxEl.style.width='100px';
    boxEl.style.height='100px';
    boxEl.style.background = getRandomColor();
    boxEl.textContent = count;
    count++;

    mainEl.append(boxEl)
    //



}