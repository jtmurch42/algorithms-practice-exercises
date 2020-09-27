const { chunk1, chunk2 } = require('./index');

describe('chunk1', () => {
  test('divides array into subarrays', () => {
    const result = chunk1([1, 2, 3, 4, 5], 2);

    expect(result).toEqual([[1, 2], [3, 4], [5]]);
  });
});

describe('chunk2', () => {
  test('divides array into subarrays', () => {
    const result = chunk2([1, 2, 3, 4, 5], 3);

    expect(result).toEqual([
      [1, 2, 3],
      [4, 5]
    ]);
  });
});
