const { verifyPassword } = require('./verify.password');

describe('verifyPassword(...)', () => {
  it('verifyPassword(...) - when receives rules - returns their results', () => {
    // Arrange
    function fakeRule (password) {
      return { passed: false, reason: 'fake reason' };
    }

    // Act
    const errors = verifyPassword({ password: 'fake input', rules: [fakeRule] });

    // Assert
    expect(errors[0]).toMatch('fake reason');
  });
});