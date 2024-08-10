//function that resets the row count when you hit the reset button
 document.querySelector('.row-counter-reset').addEventListener('click', function() {
    document.querySelector('.row-counter-display').innerHTML= 0;
});

//call value and set innerhtml of the row count equal to this number
document.querySelector('#rowButton').addEventListener('click', function() {
    document.querySelector('.row-countdown-display').innerHTML = document.querySelector('#rows').value;
});

// function that raises the rows complete by 1 when you hit the plus button
document.querySelector('.row-counter-plus').onclick = function() {
    if ((document.querySelector('.row-counter-display').innerHTML) > 0){
        (document.querySelector('.row-counter-display').innerHTML)++;
    }
 };

 // function that subtracts the rows complete by 1 when you hit the minus button
document.querySelector('.row-counter-minus').onclick = function() {
    (document.querySelector('.row-counter-display').innerHTML)--;
 };
