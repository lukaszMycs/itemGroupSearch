const fileUnderTest = require('../src/connection');

describe('connection', () => {
  it('should return result of sum function', () => {
    const result = fileUnderTest.sum(1, 2);
    expect(result).toBe(3);
  });
});
