const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const birthDay = "2 Nov 2022";

function countdown() {
    const newYearsDate = new Date(birthDay);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);


//typewriter effect

var i = 0;
var txt = 'Keep your eyes wide open and FOCUS on the road for the road has much to offer, the road gets you ready for what is to come and prepares you for what awaits you in your destination.';
var speed = 50;


function typeWriter() {
    if (i < txt.length) {
        document.getElementById('demo').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}