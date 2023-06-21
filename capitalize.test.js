const capitalize = require('./capitalizeString.js');

describe('capitalize', () => {
  test('returns the string with the first character capitalized', () => {
    const input = 'hello';
    const expectedOutput = 'Hello';

    const result = capitalize(input);

    expect(result).toBe(expectedOutput);
  });
});
