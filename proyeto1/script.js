

const counter = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

let count = 0;

incrementButton.addEventListener('click', () => {
    count++;
    counter.textContent = count;
});

decrementButton.addEventListener('click', () => {
    if (count > 0){
        count--;
        counter.textContent = count;
    }
    
});

resetButton.addEventListener('click', () => {
    count = 0
    counter.textContent = count;
});