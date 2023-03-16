const startBtn = document.querySelector('[data-start]'); 
const stopBtn = document.querySelector('[data-stop]');

stopBtn.disabled = true;

startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    try {
        return changeBgrColor = setInterval(() => {
        const bgrColor = getRandomHexColor();
        document.body.style.backgroundColor = bgrColor;
    }, 1000);   
    } catch (error) {
        error.message;
    }
});

stopBtn.addEventListener('click', () => {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    try {
       clearInterval(changeBgrColor); 
    } catch (error) {
        error.message;
    }
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}