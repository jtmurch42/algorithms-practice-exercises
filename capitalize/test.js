const { capitalize1, capitalize2 } = require('./index');

describe('capitalize1', () => {
  test('should capitalize each word in a sentence', () => {
    const result = capitalize1('a short sentence');

    expect(result).toEqual('A Short Sentence');
  });
});

describe('capitalize2', () => {
  test('should capitalize each word in a sentence', () => {
    const result = capitalize2('a short sentence');

    expect(result).toEqual('A Short Sentence');
  });
});
