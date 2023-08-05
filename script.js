const display = document.getElementById('display');
const clearButton = document.getElementById('clear');
const calculateButton = document.getElementById('calculate');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

let currentInput = '';
let previousInput = '';
let currentOperator = '';

function updateDisplay() {
  display.value = currentInput;
}

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    currentInput += button.textContent;
    updateDisplay();
  });
});

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (currentInput !== '') {
      if (previousInput !== '') {
        calculate();
      }
      currentOperator = button.textContent;
      previousInput = currentInput;
      currentInput = '';
    }
  });
});

clearButton.addEventListener('click', () => {
  currentInput = '';
  previousInput = '';
  currentOperator = '';
  updateDisplay();
});

calculateButton.addEventListener('click', () => {
  calculate();
});

function calculate() {
  if (previousInput !== '' && currentInput !== '') {
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    let result;
    switch (currentOperator) {
      case '+':
        result = prev + curr;
        break;
      case '-':
        result = prev - curr;
        break;
      case '*':
        result = prev * curr;
        break;
      case '/':
        result = prev / curr;
        break;
    }
    currentInput = result.toString();
    previousInput = '';
    currentOperator = '';
    updateDisplay();
  }
}

updateDisplay();
