class PasswordVerifier {
  constructor () {
    this.rules = [];
  }

  addRule (rule) {
    this.rules.push(rule);
  }

  verify (password) {
    const errors = [];
    this.rules.forEach((rule) => {
      const result = rule(password);
      if (!result.passed) errors.push(result.reason);
    });

    return errors;
  }
}

module.exports = { PasswordVerifier };