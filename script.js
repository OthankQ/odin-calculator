const add = (...nums) => {
  return nums.reduce((a,b) => {
    return a + b;
  }, 0)
}

const subtract = (...nums) => {
  return nums.reduce((a,b) => {
    return a - b;
  })
}

const multiply = (...nums) => {
  return nums.reduce((a,b) => {
    return a * b;
  })
}

const divide = (...nums) => {
  return nums.reduce((a,b) => {
    return a / b;
  })
}

const operate = (num1, num2, operator) => {
  return operator(num1, num2);
}