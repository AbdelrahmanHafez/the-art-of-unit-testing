const { verifyPassword } = require('./verify.password');

describe('verifyPassword(...)', () => {
  describe('with a failing rule', () => {
    it('returns errors', () => {
      // Arrange
      function fakeRule () {
        return { passed: false, reason: 'fake reason' };
      }

      // Act
      const errors = verifyPassword({ password: 'fake input', rules: [fakeRule] });

      // Assert
      expect(errors[0]).toMatch('fake reason');
    });
  });
});