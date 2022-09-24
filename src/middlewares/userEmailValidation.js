const UserService = require('../services/user.service');

module.exports.userEmailValidation = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await UserService.findOne(email);
    if (user !== null) return res.status(409).json({ message: 'User already registered' });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: 'Something is wrong.' });
  }

  next();
};