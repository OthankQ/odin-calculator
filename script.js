const buttons = document.querySelectorAll(".button");
const numberButtons = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const clearButton = document.querySelector("#clear");
const addButton = document.querySelector('#addition');
const subtractButton = document.querySelector('#subtraction');
const multiplyButton = document.querySelector('#multiplication');
const divideButton = document.querySelector('#division');
const equalButton = document.querySelector('#equals');

let displayValue = "";
let result;
let currentOperation;
let operatorButtonClicked = false;

// Button click animation
buttons.forEach((button) => {
  button.addEventListener('mousedown', (e) => {
    e.target.classList.add('clicked');
  })
  button.addEventListener('mouseup', (e) => {
    e.target.classList.remove('clicked');
  })
})

// Operator functions
const add = (...nums) => {
  return nums.reduce((a, b) => {
    return a + b;
  }, 0)
}

const subtract = (...nums) => {
  return nums.reduce((a, b) => {
    return a - b;
  })
}

const multiply = (...nums) => {
  return nums.reduce((a, b) => {
    return a * b;
  })
}

const divide = (...nums) => {
  return nums.reduce((a, b) => {
    return a / b;
  })
}

const operate = (operator, num1, num2) => {
  return operator(num1, num2);
}

const reset = () => {
  displayValue = "";
  result = null;
  currentOperation = null;
  operatorButtonClicked = false;
  populateDisplay(displayValue);
}

const populateDisplay = (value) => {
  display.innerText = value;
}

const evaluateSoFar = (operator) => {
  if (!result) {
    result = Number(displayValue);
  } else {
    if (currentOperation == divide && displayValue == 0) {
      reset();
      alert("Cannot divide by 0");
    }
    result = operate(operator, result, Number(displayValue));
  }
  populateDisplay(result);
}

const evalAndSetCurrentOperation = (operator) => {
  operatorButtonClicked = true;
  evaluateSoFar(currentOperation);
  currentOperation = operator;
}

// Number button click behavior
numberButtons.forEach(numberButton => {
  numberButton.addEventListener('click', (e) => {
    if (operatorButtonClicked) {
      displayValue = "";
      operatorButtonClicked = false;
    }
    displayValue += e.target.innerText;
    populateDisplay(displayValue);
  })
})

// Operator button click behavior
addButton.addEventListener('click', (e) => {
  console.log(e);
  evalAndSetCurrentOperation(add);
})

subtractButton.addEventListener('click', (e) => {
  evalAndSetCurrentOperation(subtract);
})

multiplyButton.addEventListener('click', (e) => {
  evalAndSetCurrentOperation(multiply);
})

divideButton.addEventListener('click', (e) => {
  evalAndSetCurrentOperation(divide);
})

equalButton.addEventListener('click', (e) => {
  evaluateSoFar(currentOperation);
  console.log(result);
  displayValue = null;
})

clearButton.addEventListener('click', (e) => {
  reset();
})