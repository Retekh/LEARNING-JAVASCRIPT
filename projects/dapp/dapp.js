const $hamburger1 = document.querySelector('.hamburger1');
const $hamburger2 = document.querySelector('.hamburger2');
const $from_coins = document.querySelector('.from_coins');
const $hr = document.createElement('HR');
$hr.classList.add('hr')
console.log($hr);

$from_coins.classList.add('translateOffScreen')
let paprikaApi = 'https://api.coinpaprika.com/v1/coins';

async function getCoinPaprika() {
    let response = await fetch(paprikaApi);
    let data = await response.json();
    let coinList = Object.values(data)
        .filter(x => x.rank == 1 || x.rank == 2 || x.rank == 3)
        .map(x => `<li>${x.name}</li>${document.body.appendChild($hr)}`)
        .join('');
    $from_coins.innerHTML = `
<ol>${coinList}</ol>`;
     
}

let top_coins = getCoinPaprika();



let canvas1 = document.createElement('canvas');
canvas1.classList.add("canvas1")
let ctx1 = canvas1.getContext('2d');
canvas1.width = 20;
canvas1.height = 20;

let canvas2 = document.createElement('canvas');
canvas2.classList.add('canvas2')
let ctx2 = canvas2.getContext('2d');
canvas2.width = 20;
canvas2.height = 20;

$hamburger1.appendChild(canvas1);
$hamburger2.appendChild(canvas2);
let i = 0;


class hamburger {
    constructor() {

    this.first_xpos1 = 2;
    this.first_ypos1 = 15;
    this.first_xpos2 = 20;    
    this.first_ypos2 = 15;  
    this.dx = (20 - Math.sqrt(Math.pow(18, 2) - Math.pow(15, 2)) - 2)/2;
    
    this.second_xpos1 = 2;
    this.second_ypos1 = 10;
    this.second_xpos2 = 20;    
    this.second_ypos2 = 10;
    this.opacity2 = 1;

    this.third_xpos1 = 2;
    this.third_ypos1 = 5;
    this.third_xpos2 = 20;    
    this.third_ypos2 = 5;

    this.color = 'black';
    this.globalAlpha = 1;

    }
    draw(context) {

        //Line 1
        context.beginPath();
        context.strokeStyle = this.color;
        context.lineWidth = 2;
        context.moveTo(this.first_xpos1, this.first_ypos1);
        context.lineTo(this.first_xpos2, this.first_ypos2);
        context.stroke();
        context.closePath();

        //Line 2
        context.beginPath();
        context.strokeStyle = this.color;
        context.lineWidth = 2;
        context.moveTo(this.second_xpos1, this.second_ypos1);
        context.lineTo(this.second_xpos2, this.second_ypos2);
        context.globalAlpha = this.opacity2;
        context.stroke();
        context.closePath();

        //Line 3
        context.beginPath();
        context.strokeStyle = this.color;
        context.lineWidth = 2;
        context.globalAlpha = 1;
        context.moveTo(this.third_xpos1, this.third_ypos1);
        context.lineTo(this.third_xpos2, this.third_ypos2);
        context.stroke();
        context.closePath();

    }

    click(context) {
        
            context.clearRect(0, 0, window.innerWidth, window.innerHeight);
            this.draw(context);
            
            if (this.opacity2 >= .1) {
                this.opacity2 -= .1;

            }


            if(this.third_ypos1 < 15) {
                this.third_ypos1 += 0.5;
            }
            if(this.first_ypos1 > 5) {
                this.first_ypos1 -= 0.5;
            }

            if (this.first_xpos1 < 2 + this.dx) {
                this.first_xpos1 = this.first_xpos1 + 0.33;
            }

            if (this.third_xpos1 < 2 + this.dx) {
                this.third_xpos1 = this.third_xpos1 + 0.33;
            }

            if (this.first_xpos2 > 20 - this.dx) {
                this.first_xpos2 = this.first_xpos2 - 0.33;
            }

            if (this.third_xpos2 > 20 - this.dx) {
                this.third_xpos2 = this.third_xpos2 - 0.33;
                
            }





    }
    

}

        

let my_hamburger1 = new hamburger();
let my_hamburger2 = new hamburger();

my_hamburger1.draw(ctx1);
my_hamburger2.draw(ctx2);

canvas1.addEventListener('click', hamburgerEvent);
canvas2.addEventListener('click', hamburgerEvent);
canvas1.addEventListener('click', menuEvent);
canvas2.addEventListener('click', menuEvent);
canvas1.addEventListener('mouseover', highlight);
canvas2.addEventListener('mouseover', highlight);
canvas1.addEventListener('mouseout', menuEventOut);
canvas2.addEventListener('mouseout', menuEventOut);

function hamburgerEvent(ev) {
    ev.stopPropagation();
    console.log(ev.target, ev.currentTarget)
    let item_clicked = ev.target.classList.value;
    if (item_clicked === 'canvas1') {
        update1()
        ctx1.clearRect(0, 0, window.innerWidth, window.innerHeight);
        
    }
    else {
        update2()
        ctx2.clearRect(0, 0, window.innerWidth, window.innerHeight)

    }
}

function highlight(ev) {
    ev.stopPropagation();
    let item_clicked = ev.target.classList.value;
    if (item_clicked === 'canvas1') {
        my_hamburger1.color = 'pink';
        my_hamburger1.draw(ctx1);

    }
    else {
        my_hamburger2.color = 'pink';
        my_hamburger2.draw(ctx2);
        
    }
}

function menuEvent(ev) {
    ev.stopPropagation();
    let item_clicked = ev.target.classList.value;
    if (item_clicked === 'canvas1') {
        canvas1.style.background = 'whitesmoke';

    }
    else {
       canvas2.style.background = 'whitesmoke';
        
    }
}
   
function menuEventOut(ev) {
    ev.stopPropagation();
    let item_clicked = ev.target.classList.value;
    if (item_clicked === 'canvas1') {
        console.log('clear rect')
        
    }
    else {
       canvas2.style.background = 'whitesmoke';
        
    }
}
function update1() {
    my_hamburger1.click(ctx1);
    requestAnimationFrame(update1);
    
  


}

function update2() {
    requestAnimationFrame(update2)
    my_hamburger2.click(ctx2);


}


