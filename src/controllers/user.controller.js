const UserService = require('../services/user.service');
const { getToken } = require('../auth/getToken');

const create = async (req, res) => {
  const { displayName, email, password } = req.body;
  try {
    const user = await UserService.create(displayName, email, password);
      const { id } = user[0].dataValues;
      const token = getToken(email, id);
      res.status(200).json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: 'Something is wrong.' });
  }
};

module.exports = {
  create,
};