const UserService = require('../services/user.service');

module.exports.userIdValidation = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await UserService.getUserById(id);
    if (!user) return res.status(404).json({ message: 'User does not exist' });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: 'Something is wrong.' });
  }

  next();
};