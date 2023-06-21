// Event Handlers

document.addEventListener('DOMContentLoaded', init);

function init() {
    const $button = document.querySelector('.js-button');
    const $link = document.querySelector('.js-link');
    const $form = document.getElementById('js-txt');

    $button.addEventListener('click', buttonClicked);

    $link.addEventListener('click', event=>{
        event.preventDefault();
        console.log(event.type, event.target, event.currentTarget);
    });

    $form.addEventListener('input', event=>{
        console.log(event.target, event.target.value);
    });

    $form.addEventListener('blur', event=>(console.log(event.type)));

    $form.addEventListener('change', event=>(console.log(event.type, event.target, event.currentTarget)));
}



function buttonClicked(event) {
    console.log(event.type, event.target, event.currentTarget);
};