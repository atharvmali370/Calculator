const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'clear') {
            currentInput = '';
            operator = '';
            firstOperand = '';
            secondOperand = '';
            display.textContent = '0';
        } else if (value === '=') {
            if (firstOperand !== '' && operator !== '' && currentInput !== '') {
                secondOperand = currentInput;
                currentInput = '';
                display.textContent = calculate(firstOperand, operator, secondOperand);
                firstOperand = display.textContent;
                operator = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput !== '') {
                firstOperand = currentInput;
                currentInput = '';
                operator = value;
            }
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});

function calculate(first, operator, second) {
    const num1 = parseFloat(first);
    const num2 = parseFloat(second);
    switch (operator) {
        case '+':
            return (num1 + num2).toString();
        case '-':
            return (num1 - num2).toString();
        case '*':
            return (num1 * num2).toString();
        case '/':
            return (num1 / num2).toString();
        default:
            return '';
    }
}