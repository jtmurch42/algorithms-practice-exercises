const steps = require('./index');

describe('steps', () => {
  test('console.log 3 stairs', () => {
    jest.spyOn(console, 'log');

    steps(3);

    expect(console.log.mock.calls[0][0]).toEqual('#  ');
    expect(console.log.mock.calls[1][0]).toEqual('## ');
    expect(console.log.mock.calls[2][0]).toEqual('###');
    console.log.mockRestore();
  });
});
