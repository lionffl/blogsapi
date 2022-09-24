const { User } = require('../models');

const create = (displayName, email, password) => {
  const newUser = User.create({
    displayName, email, password,
  });
  return newUser;
};

const findOne = (email) => {
 const user = User.findOne({
  where: { email },
 });
 return user;
};

const getAll = () => User.findAll({
  attributes: { exclude: ['password'] },
});

module.exports = {
  create,
  findOne,
  getAll,
};