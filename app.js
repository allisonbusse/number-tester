import isEven from './is-even.js';

// reference elements
const yourNumber = document.getElementById('yourNumber');
const button = document.getElementById('button');
const even = document.getElementById('even');
const odd = document.getElementById('odd');

// wire up events
button.onclick = function() {
    const x = Number(yourNumber.value);
    console.log('hi');
    if(isEven(x)) {
        odd.classList.add('hidden');
        even.classList.remove('hidden');
    } else {
        even.classList.add('hidden');
        odd.classList.remove('hidden');
    }
    

}
