let currentNumberWrapper = document.getElementById('currentNumber')
let currentNumber = 0

function increment() {
    currentNumber = currentNumber + 1
    currentNumberWrapper.innerHTML = currentNumber
}

function decrement() {
    if (currentNumberWrapper.innerHTML != 0) {
        currentNumber = currentNumber - 1
        currentNumberWrapper.innerHTML = currentNumber
    }
}