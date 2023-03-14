const textAll = document.querySelectorAll('p');
let message = textAll[1].innerHTML

console.log(textAll);
console.log(textAll[0]);
console.log(textAll[0].innerHTML);
console.log(message);

const menu = document.querySelector('#menu');
let count = 1;

function addItem() {
    const item = document.createElement('li');
    item.innerText = "Item " + (count++);
    menu.appendChild(item);
}

const product = document.querySelector('#product');

function deleteItem() {
    childCount = product.childElementCount;
    if (childCount > 0) {
        product.removeChild(document.querySelector('#part' + childCount));
    }
    else {
        alert("No child element");
    }
}

const number = document.querySelector('#number');
const n3 = document.querySelector('#n3');
const newNumber = document.createElement('li');

newNumber.innerText = "5";
number.replaceChild(newNumber, n3);

const n7 = document.createElement('li');
n7.innerText = "7";
number.replaceChild(n7, document.querySelector('#n4'));