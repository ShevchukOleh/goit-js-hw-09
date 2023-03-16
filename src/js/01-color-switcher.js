const startBtn = document.querySelector('[data-start]'); 
const stopBtn = document.querySelector('[data-stop]');

stopBtn.disabled = true;

startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    changeBgrColor();
});

function changeBgrColor() {
    return bgr = setInterval(() => {
        const bgrColor = getRandomHexColor();
        document.body.style.backgroundColor = bgrColor;
    }, 1000);
}

stopBtn.addEventListener('click', () => {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(bgr);
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}