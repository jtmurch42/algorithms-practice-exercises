const capitalize = require('./index');

describe('capitalize', () => {
  test('should capitalize each word in a sentence', () => {
    const result = capitalize('a short sentence');

    expect(result).toEqual('A Short Sentence');
  });
});
