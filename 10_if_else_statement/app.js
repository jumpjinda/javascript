age = 20;

if (age >= 15 && age <= 25) {
    console.log("Teenage");
}

let balance = 1000;
// let withDraw = 500;
let withDraw = 1100;

if (withDraw <= balance) {
    console.log("withdraw", withDraw, "USD");
    balance -= withDraw
    console.log("Your balance is", balance, "USD");
}
else {
    console.log("Your balance has not enough.");
}

let score = 30;

if (score >= 70) {
    console.log("Grade A");
}
else if (score > 60) {
    console.log("Grade B");
}
else if (score > 50) {
    console.log("Grade C");
}
else if (score > 40) {
    console.log("Grade D");
}
else {
    console.log("Grade F")
}