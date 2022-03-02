const calculator = require('./script.js')
const add = jest.fn(( a, b ) => a + b);

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -2 + 10 to equal 8', () => {
  expect(calculator.add(-2, 10)).toBe(8);
});

test('adds -900 + 800 to equal -100', () => {
  expect(calculator.add(-900, 800)).toBe(-100);
});

test('Operate function call on add with 1 and 5 to equal 6', () => {
  expect(calculator.operate(add, 1, 5)).toBe(6);
})