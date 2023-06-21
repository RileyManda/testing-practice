const stringLength = require('./stringLength.js');

describe('stringLength', () => {
  test('returns the correct count of the string length', () => {
    const testCases = [
      { string: 'A', expectedLength: 1 },
      { string: 'Helloworld', expectedLength: 10 },
    ];

    testCases.forEach(({ string, expectedLength }) => {
      const result = stringLength(string);
      expect(result.length).toBe(expectedLength);
    });
  });
});
