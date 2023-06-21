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

    test('returns the sum of a positive and a negative number', () => {
      const result = calculator.add(5, -8);
      expect(result).toBe(-3);
    });

    test('returns the sum of two negative numbers', () => {
      const result = calculator.add(-7, -4);
      expect(result).toBe(-11);
    });
  });

  // Test cases for the subtract method
  describe('subtract', () => {
    test('returns the difference of two positive numbers', () => {
      const result = calculator.subtract(7, 3);
      expect(result).toBe(4);
    });

    test('returns the difference of a positive and a negative number', () => {
      const result = calculator.subtract(5, -2);
      expect(result).toBe(7);
    });

    test('returns the difference of two negative numbers', () => {
      const result = calculator.subtract(-7, -4);
      expect(result).toBe(-3);
    });
  });

  // Test cases for the multiply method
  describe('multiply', () => {
    test('returns the product of two positive numbers', () => {
      const result = calculator.multiply(4, 3);
      expect(result).toBe(12);
    });

    test('returns the product of a positive and a negative number', () => {
      const result = calculator.multiply(5, -2);
      expect(result).toBe(-10);
    });

    test('returns the product of two negative numbers', () => {
      const result = calculator.multiply(-7, -4);
      expect(result).toBe(28);
    });
  });

  // Test cases for the divide method
  describe('divide', () => {
    test('returns the quotient of two numbers', () => {
      const result = calculator.divide(10, 2);
      expect(result).toBe(5);
    });

    test('returns a decimal quotient when dividing two numbers', () => {
      const result = calculator.divide(8, 3);
      expect(result).toBeCloseTo(2.6666666666666665);
    });

    test('throws an error when dividing by zero', () => {
      expect(() => calculator.divide(7, 0)).toThrow('Cannot divide by zero.');
    });
  });
});
