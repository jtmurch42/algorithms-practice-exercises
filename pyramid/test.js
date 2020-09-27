const pyramid = require('./index');

describe('pyramid', () => {
  test('console.log 1 stair', () => {
    jest.spyOn(console, 'log');

    pyramid(1);

    expect(console.log.mock.calls[0][0]).toEqual('#');
    console.log.mockRestore();
  });

  test('console.log 3 stairs', () => {
    jest.spyOn(console, 'log');

    pyramid(3);

    expect(console.log.mock.calls[0][0]).toEqual('  #  ');
    expect(console.log.mock.calls[1][0]).toEqual(' ### ');
    expect(console.log.mock.calls[2][0]).toEqual('#####');
    console.log.mockRestore();
  });
});
