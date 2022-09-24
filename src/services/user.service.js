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

module.exports = {
  create,
  findOne,
};