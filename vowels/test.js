const { vowels1, vowels2 } = require('./index');

describe('vowels1', () => {
  test('returns number of vowels', () => {
    const result = vowels1('HEllo');

    expect(result).toEqual(2);
  });

  test('returns 0', () => {
    const result = vowels1('bcdf');

    expect(result).toEqual(0);
  });
});

describe('vowels2', () => {
  test('returns number of vowels', () => {
    const result = vowels2('Hi THERE!');

    expect(result).toEqual(3);
  });

  test('returns 0', () => {
    const result = vowels2('bcdf');

    expect(result).toEqual(0);
  });
});
