const chunk = require('./index');

describe('chunk', () => {
  test('divides array into subarrays', () => {
    const result = chunk([1, 2, 3, 4, 5], 2);

    expect(result).toEqual([[1, 2], [3, 4], [5]]);
  });
});
