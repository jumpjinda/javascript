let a = 125;

function display() {
    let a = 100;
    let b = 75;
    let c = 50;
    console.log("a =", a);
    console.log("b =", b);
    console.log("c =", c);
}

console.log(a);
display();

// c in display function is local variable.
// that mean can not use outside display function.
console.log(c);