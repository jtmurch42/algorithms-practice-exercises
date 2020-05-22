const palindromeFunctions = require('./index');
const palindrome1 = palindromeFunctions.palindrome1;
const palindrome2 = palindromeFunctions.palindrome2;

describe('palindrome1', () => {
  test('returns true', () => {
    const result = palindrome1('abba');

    expect(result).toBe(true);
  });

  test('returns false', () => {
    const result = palindrome1('asdf');

    expect(result).toBe(false);
  });
});

describe('palindrome2', () => {
  test('returns true', () => {
    const result = palindrome2('daddad');

    expect(result).toBe(true);
  });

  test('returns false', () => {
    const result = palindrome2('edwlmw');

    expect(result).toBe(false);
  });
});
