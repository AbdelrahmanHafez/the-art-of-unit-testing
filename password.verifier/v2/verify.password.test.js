const { PasswordVerifier } = require('./verify.password');

describe('PasswordVerifier(...)', () => {
  describe('with a failing rule', () => {
    it('returns errors', () => {
      // Arrange
      function fakeRule () {
        return { passed: false, reason: 'fake reason' };
      }
      const passwordVerifier = new PasswordVerifier();
      passwordVerifier.addRule(fakeRule);

      // Act
      const errors = passwordVerifier.verify('fake password');

      // Assert
      expect(errors[0]).toMatch('fake reason');
    });
  });
});