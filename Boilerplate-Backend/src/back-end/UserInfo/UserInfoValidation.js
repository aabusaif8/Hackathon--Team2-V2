
function validateUsername(username) {
  if (typeof username !== 'string' || username.length < 3) {
    return 'Username should be at least 3 characters long.';
  }
  if (!/^[a-zA-Z0-9]+$/.test(username)) {
    return 'Username should only contain letters and numbers.';
  }
  return null;
};

function validatePassword(password) {
  if (typeof password !== 'string' || password.length < 6) {
    return 'Password should be at least 6 characters long.';
  }
  if (!/[A-Z]/.test(password)) {
    return 'Password should include at least one capital letter.';
  }
  if (!/[0-9]/.test(password)) {
    return 'Password should include at least one number.';
  }
  return null;
};

function validateSignup(req, res, next) {
  const { username, password } = req.body;

  const usernameError = validateUsername(username);
  if (usernameError) {
    return res.status(400).json({ error: usernameError });
  }

  const passwordError = validatePassword(password);
  if (passwordError) {
    return res.status(400).json({ error: passwordError });
  }

  next();
};

module.exports = validateSignup;
