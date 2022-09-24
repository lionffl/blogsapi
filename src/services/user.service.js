const { User } = require('../models');

const create = async (displayName, email, password) => {
  const newUser = await User.create({
    displayName, email, password,
  });
  return newUser;
};

const findOne = async (email) => {
  const user = await User.findOne({
    where: { email },
  });
  return user;
};

module.exports = {
  create,
  findOne,
};