const titleDisplay = document.querySelector('#title');
const countdownDisplay = document.querySelector('#countdown')
let displayValue = 0;
let countdownValue = 0;
let countdownActive = false;

const minusButton = document.querySelector('#minus');
const resetButton = document.querySelector('#reset');
const plusButton = document.querySelector('#plus');
const submitButton = document.querySelector('#submit-button');

// Increment counter and decrement countdown
plusButton.addEventListener('click', () => {
    if (countdownActive && countdownValue > 0) {
        displayValue++;
        countdownValue--;
        titleDisplay.textContent = displayValue;
        countdownDisplay.textContent = countdownValue
        checkIfComplete();
    }
});

// Decrement counter and increment countdown
minusButton.addEventListener('click', () => {
    if (countdownActive && displayValue > 0) {
        displayValue--;
        countdownValue++;
        titleDisplay.textContent = displayValue;
        countdownDisplay.textContent = countdownValue;
    }
});

// Resets counter aka titleDisplay and countdown
resetButton.addEventListener('click', () => {
    displayValue = 0;
    countdownValue = 0;
    countdownActive = false;
    titleDisplay.textContent = displayValue;
    countdownDisplay.textContent = countdownValue;
});

// Sets the countdown value and activates the countdown
submitButton.addEventListener('click', () => {
    countdownValue = parseInt(document.querySelector('#num').value, 10);
    countdownActive = true;
    displayValue = 0
    titleDisplay.textContent = displayValue
    countdownDisplay.textContent = countdownValue;
});

// Check if the countdown has reached zero and show a pop-up
function checkIfComplete() {
    if (countdownValue === 0) {
        openPopup();
        countdownActive = false;
    }
}

// Function to show a pop-up when the countdown is complete
function openPopup() {
    alert("You've completed all the rows!");
}
