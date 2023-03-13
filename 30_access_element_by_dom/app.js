let demo = document.getElementById('demo');
let bold = document.getElementById('js');
let italic = document.getElementById('css');

function changeName() {
    demo.innerText = "Varisa Jinda";
}

function boldText() {
    bold.innerHTML = "<strong>js basic</strong>";
}

function italicText() {
    italic.innerHTML = "<i>css basic</i>";
}

let x = 10;
let y = 20;

function showxy() {
    document.getElementById('empty').innerText = `x = ${x}, y = ${y}`;
}

function plusxy() {
    document.getElementById('empty').innerText = x + y;
}

function changeText() {
    // recomend selector
    document.querySelector('#demo').innerText = "change by query selector";
    document.querySelector('.mydemo').innerText = "test query selector completed";
}