const body = document.body;
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const resetBtn = document.querySelector('[data-reset');
stopBtn.disabled = true;
resetBtn.disabled = true;
let colorSwitch = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
body.addEventListener('click', event => {
  if (event.target === startBtn) {
    colorSwitch = setInterval(() => {
      body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    stopBtn.disabled = false;
    startBtn.disabled = true;
    resetBtn.disabled = false;
  } else if (event.target === stopBtn) {
    clearInterval(colorSwitch);
    stopBtn.disabled = true;
    startBtn.disabled = false;
  } else if (event.target === resetBtn) {
    body.style.backgroundColor = '#FFFFFF';
    clearInterval(colorSwitch);
    stopBtn.disabled = true;
    startBtn.disabled = false;
    resetBtn.disabled = true;
  }
});
