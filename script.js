let prevNum = document.getElementById('prev-num')
let currentNum = document.getElementById('current-num')
const clear = document.getElementById('clear')
const negPosBtn = document.getElementById('neg-pos')
const percentBtn = document.getElementById('percent')
const operators = document.querySelectorAll('.operation')
const operationSymbol = document.getElementById('operation-symbol')
let operation
const numbers = document.querySelectorAll('.number')
const equals = document.getElementById('equals')

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

numbers.forEach(number => {
    number.onclick = ()=> {
        currentNum.innerText += number.innerText
    }
})

operators.forEach(operator => {
    operator.onclick = ()=> {
        operation = operator.getAttribute('data-operation')
        console.log(operator.innerText)
        if (!(prevNum.innerText === '') && !(currentNum.innerText === '')) {    
            prevNum.innerText = calc()
            currentNum.innerText = ''
            operationSymbol.innerText = operator.innerText
        } else if (!(prevNum.innerText === '') && currentNum.innerText === '') {
            return
        } else {
            prevNum.innerText = currentNum.innerText
            currentNum.innerText = ''
            operationSymbol.innerText = operator.innerText
        }
    }
})

negPosBtn.onclick = ()=> {
    currentNum.innerText = -currentNum.innerText
}

percentBtn.onclick = ()=> {
    currentNum.innerText = currentNum.innerText*0.01
}

equals.onclick = ()=> {
    currentNum.innerText = calc()
    prevNum.innerText = ''
    operationSymbol.innerText = ''
}

clear.onclick = ()=> {
    currentNum.innerText = ''
    prevNum.innerText = ''
    operationSymbol.innerText = ''
}