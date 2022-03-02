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

console.log(operate(multiply, 2, 5));

module.exports = {
  add, 
  subtract, 
  multiply, 
  divide, 
  operate
};