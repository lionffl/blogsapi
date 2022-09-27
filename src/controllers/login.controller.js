const LoginService = require('../services/login.service');
const { getToken } = require('../auth/getToken');

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  const login = await LoginService.login(email, password);
  const { id } = login[0].dataValues;
  const token = getToken(email, id);
  res.status(200).json({ token });
};