const matrix = require('./index');

describe('matrix', () => {
  test('creates a matrix', () => {
    const results = matrix(3);

    expect(results).toEqual([
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5]
    ]);
  });
});
