const $button = document.querySelector('.js-button');
const $link = document.querySelector('.js-link');
const $form = document.querySelector('form');


function clickHandler() {
    event.preventDefault();
    alert('Clicked');
}

function submitHandler() {
    event.preventDefault();

    const $input = document.querySelector('[name=token-name]');
alert($input.value);
$input.value = '';

}

$button.addEventListener('click', clickHandler);
$link.addEventListener('click', clickHandler);
$form.addEventListener('submit', submitHandler);

