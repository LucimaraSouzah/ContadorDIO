let currentNumberWrapper = document.getElementById('currentNumber')
let currentNumber = 0


function incrementFunction() {
    if (currentNumberWrapper.innerHTML < 10) {
        ++currentNumber
        currentNumberWrapper.innerHTML = currentNumber    
    }
    if (currentNumberWrapper.innerHTML >= 0) {
        currentNumberWrapper.style.color = "black"
    }  
}

function decrementFunction() {
    if (currentNumberWrapper.innerHTML > -10) {
        --currentNumber
        currentNumberWrapper.innerHTML = currentNumber 
    }
    if (currentNumberWrapper.innerHTML < 0) {
        currentNumberWrapper.style.color = "red"
    }  
}

increment.addEventListener('click', (e=>{
    incrementFunction()
}))

decrement.addEventListener('click', (e=>{
    decrementFunction()
}))

