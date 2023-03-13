function plusNumber(x) {
    console.log(x);
}

function fullName(fname, lname, city) {
    console.log(fname, lname, city);
}

function summation(x, y) {
    let total = x + y;
    console.log("Answer =", total)
}

let number = 200;

plusNumber(number);
fullName("Tanawat", "Jinda", "Sattahip");
fullName("Varisa", "Jinda");
summation(500, 1000);

function item(name, price, quantity = 1) {
    console.log(name, price, quantity);
}

item("coke", 12.5);