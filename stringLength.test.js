const stringLength = require('./stringLength.js');

describe('stringLength', () => {
  test('returns the correct count of the string length', () => {
    const testCases = [
      { string: 'A', expectedLength: 1 }, // lenght of string is at least 1 character
      { string: 'Helloworld', expectedLength: 10 }, // lenght of string is at least 10 characters
    ];

    testCases.forEach(({ string, expectedLength }) => {
      expect(() => {
        stringLength(string);
      }).not.toThrow(); // Ensure no error is thrown

      const result = stringLength(string);
      expect(result).toBe(expectedLength);
    });
  });
});
