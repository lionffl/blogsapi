const invalidNameMsg = { message: '"displayName" length must be at least 8 characters long' };
const invalidEmailMsg = { message: '"email" must be a valid email' };
const invalidPasswordMsg = { message: '"password" length must be at least 6 characters long' };

const MIN_DISPLAYNAME_SIZE = 8;
const MIN_PASSWORD_SIZE = 6;
const EMAIL_PATTERN = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/i;

module.exports.userFieldsValidation = (req, res, next) => {
  const { displayName, email, password } = req.body;

  const isDisplayNameInvalid = displayName.length < MIN_DISPLAYNAME_SIZE;
  
  if (isDisplayNameInvalid) return res.status(400).json(invalidNameMsg);

  const isEmailInvalid = !EMAIL_PATTERN.test(email);

  if (isEmailInvalid) return res.status(400).json(invalidEmailMsg);

  const isPasswordInvalid = password.length < MIN_PASSWORD_SIZE;

  if (isPasswordInvalid) return res.status(400).json(invalidPasswordMsg);
  
  next();
};
