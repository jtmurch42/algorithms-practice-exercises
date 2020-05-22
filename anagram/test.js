const anagrams = require('./index');

describe('anagrams', () => {
  test('returns true', () => {
    const result = anagrams('rail safety', 'fairy tales');

    expect(result).toEqual(true);
  });

  test('returns false', () => {
    const result = anagrams('Hi there', 'Bye there');

    expect(result).toEqual(false);
  });
});
