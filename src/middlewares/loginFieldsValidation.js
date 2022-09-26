const LoginService = require('../services/login.service');

const errorEmptyFieldsMsg = { message: 'Some required fields are missing' };
const invalidFieldsMsg = { message: 'Invalid fields' };

module.exports.loginFieldsValidation = async (req, res, next) => {
  const { email, password } = req.body;
  
  if (!email || !password) return res.status(400).json(errorEmptyFieldsMsg);
  
  const login = await LoginService.login(email, password);
  
  if (login.length === 0) return res.status(400).json(invalidFieldsMsg);
  
  next();
};
