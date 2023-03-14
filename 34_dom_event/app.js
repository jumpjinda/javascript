function welcome() {
    alert("Welcome to webpage!!")
}

function highlight(obj) {
    obj.style.background = "yellow";
}

function unHighlight(obj) {
    obj.style.background = "blue";
}

function getMenu() {
    const menu = document.querySelector('#menu');
    const display = document.querySelector('#display');

    console.log(menu.value.toUpperCase());
    display.innerText = menu.value;
}

function highlight2(obj) {
    obj.style.background = "green";
}

function unHighlight2(obj) {
    obj.style.background = "white";
}