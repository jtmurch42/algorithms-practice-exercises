const { reverseStr1, reverseStr2, reverseStr3 } = require('./index');

describe('reverseStr1', () => {
  test('reverses string', () => {
    const result = reverseStr1('hello');

    expect(result).toEqual('olleh');
  });
});

describe('reverseStr2', () => {
  test('reverses string', () => {
    const result = reverseStr2('world');

    expect(result).toEqual('dlrow');
  });
});

describe('reverseSt3', () => {
  test('reverses string', () => {
    const result = reverseStr3('good day');

    expect(result).toEqual('yad doog');
  });
});
