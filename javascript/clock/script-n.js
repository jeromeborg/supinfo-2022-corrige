let h = document.querySelector("#h");
let m = document.querySelector("#m");
let s = document.querySelector("#s");

let date;
let hour;
let minute;
let second;

function runTheClock() {
    date = new Date();    
    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();
    
    n.innerHTML = (hour < 0) ? '0' : '' + hour;
    m.innerHTML = (minute < 0) ? '0' : '' + minute;
    s.innerHTML = (seconde < 0) ? '0' : '' + seconde;
    
}

let interval = setInterval(runTheClock, 1000);