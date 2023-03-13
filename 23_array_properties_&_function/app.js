let color = ["red", "white", "blue", "yellow", "magenta"];

count_color = color.length;
console.log(count_color);

sorted_color = color.sort();
console.log(sorted_color);
console.log(color.reverse());

// sort() or reverse() will change original variable values.
console.log(color);

let color2 = ["red", "white", "blue", "yellow", "magenta"];

// find first and last value in array.
console.log(color2[0]);
console.log(color2[color2.length - 1]);

// add value to array.
console.log(color2.length);
color2.push("grey");
console.log(color2.length);

// use for loop in array.
let color3 = ["red", "white", "blue", "yellow", "magenta", "brown", "green", "orange", "pink", "grey"];

for (let i = 0; i < color3.length; i++) {
    console.log(i, color3[i]);
}

for (let i = 0; i < color3.length; i++) {
    console.log((i + 1), color3[i]);
}