const UserService = require('../services/user.service');

const userAlreadyRegistred = async (req, res, next) => {
  const { email } = req.body;
  const user = await UserService.findOne(email);
  const isEmailValid = user.dataValues.email === email;
  console.log('email valid,', isEmailValid);
  if (isEmailValid) {
    return res.status(409).json({ message: 'User already registred' });
  }

  next();
};

module.exports = userAlreadyRegistred;