const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

function startBackgroundChange() {
    document.body.style.backgroundColor = getRandomHexColor();
}

let intervalId;

startBtn.addEventListener('click', () => {
    intervalId = setInterval(startBackgroundChange, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
});

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}