const jwt = require('jsonwebtoken');
const UserService = require('../services/user.service');
require('dotenv/config');

const secret = process.env.JWT_SECRET;

const getUserId = async (token) => {
  const decoded = jwt.verify(token, secret);
  const user = await UserService.findOne(decoded.data.email);
  return user.id;
};

module.exports = getUserId;