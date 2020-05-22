const maxChar = require('./index');

describe('maxChar', () => {
  test('returns the most characters used in a string', () => {
    const result = maxChar('abbbcc');

    expect(result).toBe('b');
  });
});
