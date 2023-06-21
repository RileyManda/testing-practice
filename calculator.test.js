const Calculator = require('./calculator.js');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  // Test cases for the add method
  describe('add', () => {
    test('returns the sum of two positive numbers', () => {
      const result = calculator.add(2, 3);
      expect(result).toBe(5);
    });
  });
});