let points = [20, -500, -100, 120, 250, -14];

console.log(points);

points.sort(function (a, b) {
    return a - b;
});

console.log(points);

points.sort(function (a, b) {
    return b - a;
});

console.log(points)