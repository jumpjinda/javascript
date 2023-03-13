const title = document.querySelector('#title');
const js = document.querySelector('.js');
const box = document.querySelector('.box');

function changeColor() {
    title.style.color = "red";
    title.style.backgroundColor = "blue";
    title.style.fontSize = "4rem";

    js.setAttribute('class', 'newjs');
}

function lightMode() {
    box.setAttribute('class', 'light');
}

function darkMode() {
    box.setAttribute('class', 'dark');
}