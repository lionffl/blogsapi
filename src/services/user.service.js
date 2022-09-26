const { User } = require('../models');

const create = (displayName, email, password) => {
  const newUser = User.create({
    displayName, email, password,
  });
  return newUser;
};

const getUserByEmail = (email) => {
 const user = User.findOne({
  where: { email },
 });
 return user;
};

const getAll = () => User.findAll({
  attributes: { exclude: ['password'] },
});

const getUserById = (id) => User.findOne({
  where: { id },
  attributes: { exclude: ['password'] },
});

const destroy = (id) => User.destroy({
  where: { id },
});

module.exports = {
  create,
  getUserByEmail,
  getAll,
  getUserById,
  destroy,
};