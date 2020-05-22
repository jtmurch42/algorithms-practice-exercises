const reverseStrFunctions = require('./index');
const reverseStr1 = reverseStrFunctions.reverseStr1;
const reverseStr2 = reverseStrFunctions.reverseStr2;

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
