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

let displayContent = "";
let enteredNumber = "";

const updateDisplay = (text) => {
  // Don't update the display directly, but update entered Number,
  // then update the display with the enteredNumber.
  enteredNumber += text;
  displayContent = enteredNumber;
  display.innerText = displayContent;
}

const clearDisplay = () => {
  displayContent = "0";
  entireNumber = "";
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