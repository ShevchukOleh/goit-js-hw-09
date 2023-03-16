const startBtn = document.querySelector('[data-start]'); 
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    changeBgrColor = setInterval(() => {
        const bgrColor = getRandomHexColor();
        document.body.style.backgroundColor = bgrColor;
    }, 1000);
});

stopBtn.addEventListener('click', () => {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(changeBgrColor);
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}