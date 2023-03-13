let check_status = 0;
let light;

switch (check_status) {
    case 0: light = "Turn off";
        break;
    case 1: light = "Turn on";
        break;
    default: light = "No valid";
}

console.log(light);