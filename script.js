const startStopbtn = document.querySelector('#startStopbtn');
const resetBtn = document.querySelector('#resetBtn');

//variables for time value//
let seconds = 0;
let minutes = 0;
let hours = 0;

//variables for leading zeros
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

//variables for set intervals and timerstatus
let timerInterval = null;
let timerstatus = 'stopped';


//stopWatch function
function stopWatch() {

    seconds++

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    if (seconds < 10) {
        leadingSeconds = '0' + seconds.toString();
    } else {
        leadingSeconds = seconds;
    }

    if (minutes < 10) {
        leadingMinutes = '0' + minutes.toString();
    } else {
        leadingMinutes = minutes;
    }


    if (hours < 10) {
        leadingHours = '0' + hours.toString();
    } else {
        leadingHours = hours
    }

    let displayTimer = document.getElementById('timer').innerText =
        leadingHours + ':' + leadingMinutes + ':' + leadingSeconds;
};

startStopbtn.addEventListener('click', function () {
    if (timerstatus === 'stopped') {
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopbtn').innerHTML = `
        <i class="fa-solid fa-pause" id="pause"></i>`;
        timerstatus = 'started';
    } else {
        window.clearInterval(timerInterval);
        document.getElementById('startStopbtn').innerHTML = `
        <i class="fa-solid fa-play" id="play"></i>`;
        timerstatus = 'stopped';
    }
});

resetBtn.addEventListener('click', function () {
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerHTML = '00:00:00';
})