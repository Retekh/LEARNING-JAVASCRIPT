const $box1 = document.getElementById('box-1');
const $box2 = document.getElementById('box-2');
const $box3 = document.getElementById('box-3');
const $box4 = document.getElementById('box-4');

let highlight = (event) => {
    event.stopImmediatePropagation();
    let target = event.currentTarget;
    target.className = 'green';
    reset(target);
}

let reset = (_element) => {
    setTimeout(() => {
      _element.className = '';  
    }, 2000)
    
}

$box2.addEventListener('click', (event) =>{
    console.log('clicked')
});

[$box1,$box2,$box3,$box4].forEach((element) => {
    element.addEventListener('click', highlight);
})




