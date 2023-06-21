const reverseString = require('./reverseString.js');

describe('reverseString', () => {
  test('returns the reversed string', () => {
    const input = 'Hello, world!';
    const expectedOutput = '!dlrow ,olleH';
    const result = reverseString(input);
    expect(result).toBe(expectedOutput);
  });
});
