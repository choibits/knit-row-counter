const titleDisplay = document.querySelector('#title');
const countdownDisplay = document.querySelector('#countdown')
let displayValue = 0;
let countdownValue = 0;

const minusButton = document.querySelector('#minus');
const resetButton = document.querySelector('#reset');
const plusButton = document.querySelector('#plus');
const submitButton = document.querySelector('#submit-button');

plusButton.addEventListener('click', () => {
    displayValue++;
    titleDisplay.textContent = displayValue;
    countdownDisplay.textContent--;
});

minusButton.addEventListener('click', () => {
    if (displayValue > 0) {
        displayValue--;
    }
    titleDisplay.textContent = displayValue;
    countdownDisplay.textContent++;
});

resetButton.addEventListener('click', () => {
    displayValue = 0;
    countdownValue = 0;
    titleDisplay.textContent = displayValue;
    countdownDisplay.textContent = countdownValue;
});

submitButton.addEventListener('click', () => {
    countdownDisplay.textContent = document.querySelector('#num').value;
});
