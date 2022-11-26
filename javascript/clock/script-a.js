const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();

let hourPosition = (hour*360/12) + (minute*(360/60)/60);
let minutePosition = (minute*360/60) + (second*(360/60)/60);
let secondPosition = second*360/60;


function runTheClock() {

    hourPosition = hourPosition + (3/360);
    minutePosition = minutePosition + ((1/60)*6);
    secondPosition = secondPosition + (360/60);

 
    HOURHAND.style.transform = "rotate(" + hourPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minutePosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secondPosition + "deg)";
}

let interval = setInterval(runTheClock, 1000);