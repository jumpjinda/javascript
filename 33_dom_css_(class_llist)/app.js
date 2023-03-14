const box = document.querySelector('#box');
let darkModeStatus;

function addDarkMode() {
    box.classList.add("darkMode");
}

function removeDarkMode() {
    box.classList.remove("darkMode");
}

function switchMode() {
    box.classList.toggle("darkMode");
    darkModeStatus = box.classList.contains("darkMode");
    console.log(darkModeStatus);
    if (darkModeStatus) {
        box.style.color = "yellow";
    }
    else {
        box.style.color = "orange";
    }
}