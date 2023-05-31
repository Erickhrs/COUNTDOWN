let buttons = document.querySelectorAll(".buttons");
let display = document.getElementById("display")
var interval;
var timedefined;
let cb = document.getElementById("cb");
let validador = false;

var hrs;
var min;
var sec;
buttons.forEach(eleb => {
    eleb.addEventListener('click', function () {
        timedefined = eleb.id;
        if (validador == true) {
            alert("PARE PARA DEFINIR UM NOVO TEMPO")
        }
        else {
            switch (timedefined) {
                case "1min":
                    hrs = 0;
                    min = 1;
                    sec = 0;
                    interval = setInterval(time, 1000)
                    display.innerHTML = (twodigits(hrs) + ":" + twodigits(min) + ":" + twodigits(sec))
                    break;
                case "3min":
                    hrs = 0;
                    min = 3;
                    sec = 0;
                    interval = setInterval(time, 1000)
                    display.innerHTML = (twodigits(hrs) + ":" + twodigits(min) + ":" + twodigits(sec))
                    break;
                case "5min":
                    hrs = 0;
                    min = 5;
                    sec = 0;
                    interval = setInterval(time, 1000)
                    display.innerHTML = (twodigits(hrs) + ":" + twodigits(min) + ":" + twodigits(sec))
                    break;
                case "10min":
                    hrs = 0;
                    min = 10;
                    sec = 0;
                    interval = setInterval(time, 1000)
                    display.innerHTML = (twodigits(hrs) + ":" + twodigits(min) + ":" + twodigits(sec))
                    break;
                case "20min":
                    hrs = 0;
                    min = 20;
                    sec = 0;
                    interval = setInterval(time, 1000)
                    display.innerHTML = (twodigits(hrs) + ":" + twodigits(min) + ":" + twodigits(sec))
                    break;
                case "30min":
                    hrs = 0;
                    min = 30;
                    sec = 0;
                    interval = setInterval(time, 1000)
                    display.innerHTML = (twodigits(hrs) + ":" + twodigits(min) + ":" + twodigits(sec))
                    break;
                case "1h":
                    hrs = 1;
                    min = 0;
                    sec = 0;
                    interval = setInterval(time, 1000)
                    display.innerHTML = (twodigits(hrs) + ":" + twodigits(min) + ":" + twodigits(sec))
                    break;
                case "2h":
                    hrs = 2;
                    min = 0;
                    sec = 0;
                    interval = setInterval(time, 1000)
                    display.innerHTML = (twodigits(hrs) + ":" + twodigits(min) + ":" + twodigits(sec))
                    break;

            }
            validador = true;
        }





    })
})

function time() {
    cb.style.display = "flex";
    if (sec == 0 && min > 0) {
        sec = 60;
        if (min > 0) {
            min = min - 1;
        }
    }
    if (sec == 0 && min == 0 && hrs > 0) {
        sec = 60;
        min = 59;
        if (hrs > 0) {
            hrs = hrs - 1;
        }
    }
    if (sec == 0 && min == 0 && hrs == 0) {
        reset();
    }

    if (sec !== 0) {
        sec = sec - 1
        display.innerHTML = (twodigits(hrs) + ":" + twodigits(min) + ":" + twodigits(sec))
    }
}

function twodigits(digit) {
    if (digit < 10) {
        return ("0" + digit)
    }
    else {
        return (digit)
    }
}

function reset() {
    clearInterval(interval)
    hrs = 0;
    min = 0;
    sec = 0;
    display.innerHTML = (twodigits(hrs) + ":" + twodigits(min) + ":" + twodigits(sec))
    validador = false;
}
function pause() {
    clearInterval(interval)
    validador = false;
}
function start() {
    if (validador==false){
        interval = setInterval(time, 1000)
        validador = true;
    }
    else{}
}