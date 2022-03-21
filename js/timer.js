const timerBlock = document.querySelector(".timer__time");
const lastDate = "30 April 2022";

let interval;

const updateClock = () => {
    const date = new Date().getTime();
    const deadline = new Date(lastDate).getTime();
    const timeRemaining = (deadline - date) / 1000;
    const days = ~~(timeRemaining / 60 / 60 / 24);
    const hours = ~~((timeRemaining / 60 / 60) % 24);
    const minutes = ~~((timeRemaining / 60) % 60);
    const seconds = ~~(timeRemaining % 60);

    const formatDays = days < 10 ? `0${days}` : `${days}`;
    const formatHours = hours < 10 ? `0${hours}` : `${hours}`;
    const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    timerBlock.textContent = `${formatDays}:${formatHours}:${formatMinutes}:${formatSeconds}`;

    if (timeRemaining < 1) {
        clearInterval(interval);
        timerBlock.textContent = `00:00:00:00`;
    }
};

updateClock();
interval = setInterval(updateClock, 800);