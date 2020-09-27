const { steps1, steps2 } = require('./index');

describe('steps1', () => {
  test('console.log 3 stairs', () => {
    jest.spyOn(console, 'log');

    steps1(3);

    expect(console.log.mock.calls[0][0]).toEqual('#  ');
    expect(console.log.mock.calls[1][0]).toEqual('## ');
    expect(console.log.mock.calls[2][0]).toEqual('###');
    console.log.mockRestore();
  });
});

describe('steps2', () => {
  test('console.log 4 stairs', () => {
    jest.spyOn(console, 'log');

    steps2(4);

    expect(console.log.mock.calls[0][0]).toEqual('#   ');
    expect(console.log.mock.calls[1][0]).toEqual('##  ');
    expect(console.log.mock.calls[2][0]).toEqual('### ');
    expect(console.log.mock.calls[3][0]).toEqual('####');
    console.log.mockRestore();
  });
});
