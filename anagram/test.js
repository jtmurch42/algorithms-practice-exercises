const { anagrams1, anagrams2 } = require('./index');

describe('anagrams1', () => {
  test('returns true', () => {
    const result = anagrams1('rail safety', 'fairy tales');

    expect(result).toEqual(true);
  });

  test('returns false', () => {
    const result = anagrams1('Hi! there!', 'Bye there');

    expect(result).toEqual(false);
  });
});

describe('anagrams2', () => {
  test('returns true', () => {
    const result = anagrams2('rail safety', 'fairy tales');

    expect(result).toEqual(true);
  });

  test('returns false', () => {
    const result = anagrams2('Hi! there!', 'Bye there');

    expect(result).toEqual(false);
  });
});
