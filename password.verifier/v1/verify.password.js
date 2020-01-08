function verifyPassword ({ password, rules }) {
  const errors = [];

  rules.forEach(rule => {
    const result = rule(password);
    if (!result.passed) return errors.push(`error ${result.reason}`);
  });

  return errors;
}

module.exports = { verifyPassword };