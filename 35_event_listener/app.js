const menu = document.querySelector('#menu');
const display = document.querySelector('#display');
const btn = document.querySelector('#btn');

menu.addEventListener('change', getMenu);
btn.addEventListener('click', showWelcom);

function getMenu() {
    display.innerText = menu.value;
}

function showWelcom() {
    alert("Welcome to webpage!!")
}