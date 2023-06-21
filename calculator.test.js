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
  // Test cases for the multiply method
  describe('multiply', () => {
    test('returns the product of two positive numbers', () => {
      const result = calculator.multiply(4, 3);
      expect(result).toBe(12);
    });

    test('returns the product of a positive and a negative number', () => {
      const result = calculator.multiply(5, -3);
      expect(result).toBe(-15);
    });

    test('returns the product of two negative numbers', () => {
      const result = calculator.multiply(-7, -4);
      expect(result).toBe(28);
    });
  });
});