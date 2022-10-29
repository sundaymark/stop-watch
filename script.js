const startStopBtn = document.querySelector('.startStopbtn');
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
let timerStatus = 'stopped';


//stopWatch function
const stopWatch = () => {

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

    document.querySelector('.timer').innerText =
        leadingHours + ':' + leadingMinutes + ':' + leadingSeconds;
};

startStopBtn.addEventListener('click', () => {
    if (timerStatus === 'stopped') {
        timerInterval = window.setInterval(stopWatch, 1000);
        document.querySelector('.startStopbtn').innerHTML = `
        <i class="fa-solid fa-pause" id="pause"></i>`;
        timerStatus = 'started';
    } else {
        window.clearInterval(timerInterval);
        document.querySelector('.startStopbtn').innerHTML = `
        <i class="fa-solid fa-play" id="play"></i>`;
        timerStatus = 'stopped';
    }
});

resetBtn.addEventListener('click', () => {
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.querySelector('.timer').innerHTML = '00:00:00';
    document.querySelector('.startStopbtn').innerHTML = `
    <i class="fa-solid fa-play" id="play"></i>`;
    timerStatus = 'stopped';
})