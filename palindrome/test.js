const { palindrome1, palindrome2, palindrome3 } = require('./index');

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

describe('palindrome3', () => {
  test('returns true', () => {
    const result = palindrome3('sadas');

    expect(result).toBe(true);
  });

  test('returns false', () => {
    const result = palindrome3('jon');

    expect(result).toBe(false);
  });
});
