let displayValue = '0';
let currentValue = '';
let currentOperator = '';

function appendToDisplay(value) {
  if (displayValue === '0' || currentValue === '0') {
    displayValue = '';
    currentValue = '';
  }
  displayValue += value;
  currentValue += value;
  document.getElementById('display').innerText = displayValue;
}

function operation(operator) {
  if (currentOperator !== '') {
    calculate();
  }
  currentOperator = operator;
  displayValue += ' ' + operator + ' ';
  currentValue = '';
  document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
  displayValue = '0';
  currentValue = '';
  currentOperator = '';
  document.getElementById('display').innerText = displayValue;
}

function calculate() {
  let result;
  const numbers = displayValue.split(' ').map(parseFloat);
  const num1 = numbers[0];
  const num2 = numbers[2];

  switch (currentOperator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      break;
  }

  displayValue = result.toString();
  currentValue = result.toString();
  currentOperator = '';
  document.getElementById('display').innerText = displayValue;
}
