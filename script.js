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


const buttons = document.querySelectorAll(".button");
const numberButtons = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const clearButton = document.querySelector("#clear");
const addButton = document.querySelector('#addition');
const subtractButton = document.querySelector('#subtraction');
const multiplyButton = document.querySelector('#multiplication');
const divideButton = document.querySelector('#division');
const equalButton = document.querySelector('#equals');

let displayContent = "";
let enteredNumber = ""; // Variable where the display number will be stored
let operandA;
let operandB;
let currentOperation;

const updateDisplay = (text) => {
  // Don't update the display directly, but update entered Number,
  // then update the display with the enteredNumber.
  enteredNumber += text;
  displayContent = enteredNumber;
  display.innerText = displayContent;
}

const clearDisplay = () => {
  displayContent = "0";
  enteredNumber = "";
  display.innerText = displayContent;
}

// Button click animation
buttons.forEach((button) => {
  button.addEventListener('mousedown', (e) => {
    e.target.classList.add('clicked');
  })
  button.addEventListener('mouseup', (e) => {
    e.target.classList.remove('clicked');
  })
})

// Populate screen when number buttons are pressed
numberButtons.forEach((numberButton) => {
  numberButton.addEventListener('mousedown', (e) => {
    // If there's a single 0 on display, and when 0 is clicked,
    // Don't add another 0
    if (e.target.innerText === "0" && displayContent === "0") {
      return
    }
    updateDisplay(e.target.innerText);
  })
})

// Clear display when C button is clicked
clearButton.addEventListener('click', () => {
  clearDisplay();
})

// When an operator button is clicked, 
// number currently on display will be stored in operandA variable
// and the what kind of operation will be stored in whatOperation variable
// enteredNumber will be reset to 0, but displayNumber will only be updated
// when a new number is entered.
// When the user enteres the second number and hits equals sign, 
// The second number will be stored into operandB variable,
// Operate function will be called with  

// If another opertor is clicked instead of the equal button and there is already operand A, 
// Result of the previous operation is stored in operandA

addButton.addEventListener('click', () => {
  if (operandA) {
    operandA += enteredNumber;
  }
  operandA = Number(enteredNumber);
  enteredNumber = "";
  currentOperation = add;
  console.log(operandA);
  console.log(currentOperation);
})

equalButton.addEventListener('click', () => {
  operandB = Number(enteredNumber);
  console.log(operandB);
  displayContent = operate(currentOperation, operandA, operandB);
  console.log(displayContent);
  display.innerText = displayContent;
  operandA = Number(displayContent);
})