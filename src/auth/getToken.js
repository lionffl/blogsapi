const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

module.exports.getToken = (email, id) => {
  const token = jwt.sign({ data: { email, id } }, secret, jwtConfig);
  return token;
};
