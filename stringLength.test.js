const stringLength = require('./stringLength.js');

describe('stringLength', () => {
  test('returns the correct count of the string length', () => {
    const testCases = [
      { string: '', expectedLength: 0 },
      { string: 'Hello, world!', expectedLength: 13 },
      { string: 'OpenAI', expectedLength: 6 },
      { string: '12345', expectedLength: 5 },
    ];

    testCases.forEach(({ string, expectedLength }) => {
      const result = stringLength(string);
      expect(result.length).toBe(expectedLength);
    });
  });
});
