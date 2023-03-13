function getIP() {
    return "127.0.0.1";
}

function getMyAddress() {
    let city = "Sattahip";
    return city;
}

let myIP = getIP();
console.log(myIP);

console.log(getMyAddress());

function setSalary(salary) {
    let bonus = 1000;
    return salary + bonus;
}

let total = setSalary(15000);
console.log(total)