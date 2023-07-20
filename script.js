let prevNum = document.getElementById('prev-num')
let currentNum = document.getElementById('current-num')
const clear = document.getElementById('clear')
const negPosBtn = document.getElementById('neg-pos')
const percentBtn = document.getElementById('percent')
const operators = document.querySelectorAll('.operation')
let operation
const numbers = document.querySelectorAll('.number')
const equals = document.getElementById('equals')
numbers.forEach(number => {
    number.onclick = ()=> {
        currentNum.innerText += number.innerText
    }
})

operators.forEach(operator => {
    operator.onclick = ()=> {
        operation = operator.getAttribute('data-operation')
        prevNum.innerText = currentNum.innerText
        currentNum.innerText = ''
    }
})

negPosBtn.onclick = ()=> {
    currentNum.innerText = -currentNum.innerText
}

percentBtn.onclick = ()=> {
    currentNum.innerText = currentNum.innerText*0.01
}

equals.onclick = ()=> {
    function calc() {
        switch (operation) {
            case '/':
                return +(parseFloat(prevNum.innerText)/parseFloat(currentNum.innerText)).toFixed(10)
            case '*':
                return +(parseFloat(prevNum.innerText)*parseFloat(currentNum.innerText)).toFixed(10)
            case '-':
                return +(parseFloat(prevNum.innerText)-parseFloat(currentNum.innerText)).toFixed(10)
            case '+':
                return +(parseFloat(prevNum.innerText)+parseFloat(currentNum.innerText)).toFixed(10)
        }
    }
    currentNum.innerText = calc()
    prevNum.innerText = ''
}

clear.onclick = ()=> {
    currentNum.innerText = ''
    prevNum.innerText = ''
}