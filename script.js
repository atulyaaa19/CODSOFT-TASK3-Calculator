let display = document.getElementById('display');
let displayValue = '0';

function appendNumber(number) {
    if (displayValue === '0') {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function appendOperator(operator) {
    if (displayValue !== '0' && !isOperator(displayValue[displayValue.length - 1])) {
        displayValue += operator;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function deleteLast() {
    if (displayValue.length > 1) {
        displayValue = displayValue.slice(0, -1);
    } else {
        displayValue = '0';
    }
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    display.innerText = displayValue;
}

function isOperator(character) {
    return ['+', '-', '*', '/'].includes(character);
}
