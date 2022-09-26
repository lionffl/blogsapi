const UserService = require('../services/user.service');
const { getToken } = require('../auth/getToken');
const getUserId = require('../helpers/getUserId');

const objError = { message: 'Something is wrong.' };

const create = async (req, res) => {
  const { displayName, email, password } = req.body;
  try {
    const user = await UserService.create(displayName, email, password);
      const { id } = user.dataValues;
      const token = getToken(email, id);
      res.status(201).json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(400).json(objError);
  }
};

const getAll = async (_req, res) => {
  try {
    const users = await UserService.getAll();
    res.status(200).json(users);  
  } catch (error) {
    console.error(400).json(objError);
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserService.getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    console.error(400).json(objError);
  }
};

const destroy = async (req, res) => {
  const token = req.header('Authorization');
  try {
    const userId = await getUserId(token);
    UserService.destroy(userId);
    res.status(204).end();
  } catch (error) {
    console.error(error.message);
    res.status(400).json(objError);
  }
};

module.exports = {
  create,
  getAll,
  getUserById,
  destroy,
};