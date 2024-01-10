let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
  const expression = display.value;
  try {
    const result = evaluateExpression(expression);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}

function evaluateExpression(expression) {
  const operators = ['+', '-', '*', '/'];
  for (let operator of operators) {
    const parts = expression.split(operator);
    if (parts.length === 2) {
      const num1 = Number(parts[0]);
      const num2 = Number(parts[1]);
      switch (operator) {
        case '+':
          return add(num1, num2);
        case '-':
          return subtract(num1, num2);
        case '*':
          return multiply(num1, num2);
        case '/':
          if (num2 === 0) {
            throw new Error('Division by zero');
          }
          return divide(num1, num2);
      }
    }
  }
  throw new Error('Invalid expression');
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Tidak dapat membagi dengan nol");
  }
  return a / b;
}

function evaluateExpression(expression) {
  try {
    return eval(expression);
  } catch (error) {
    throw new Error('Invalid expression');
  }
}

// Fungsi untuk perpangkatan
function power(a, b) {
  return Math.pow(a, b);
}