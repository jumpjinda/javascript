// += ::: x += y ::: x = x + y
// -= ::: x -= y ::: x = x - y
// *= ::: x *= y ::: x = x * y
// /= ::: x /= y ::: x = x / y
// %= ::: x %= y ::: x = x % y

let x = 10, y = 20;

console.log("x =", x, "y =", y);
console.log("-------------------");

console.log("x =", x);
console.log("x += y =", x += y);
console.log("x =", x);
console.log("-------------------");

x = 10;

console.log("x =", x);
console.log("x -= y =", x -= y);
console.log("x =", x);
console.log("-------------------");

x = 10;

console.log("x =", x);
console.log("x *= y =", x *= y);
console.log("x =", x);
console.log("-------------------");

x = 10;

console.log("x =", x);
console.log("x /= y =", x /= y);
console.log("x =", x);
console.log("-------------------");

x = 10;

console.log("x =", x);
console.log("x %= y =", x %= y);
console.log("x =", x);
console.log("-------------------");