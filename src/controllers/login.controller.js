const LoginService = require('../services/login.service');
const { getToken } = require('../auth/getToken');

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const login = await LoginService.login(email, password);
    if (login.length === 0) res.status(400).json({ message: 'Invalid fields' });
    else {
      const { id } = login[0].dataValues;
      const token = getToken(email, id);
      res.status(200).json({ token }); 
}
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: 'Something is wrong.' });
  }
};