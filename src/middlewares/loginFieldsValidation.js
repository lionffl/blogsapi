module.exports.loginFieldsValidation = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) res.status(400).json({ message: 'Some required fields are missing' });
  else next();
};
