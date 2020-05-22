const reverseInt = require('./index');

describe('reverseInt', () => {
  test('reverses positive integers', () => {
    const result = reverseInt(24);

    expect(result).toBe(42);
  });

  test('reverses negative integers', () => {
    const result = reverseInt(-15);

    expect(result).toBe(-51);
  });
});
