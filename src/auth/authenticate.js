const jwt = require('jsonwebtoken');
const UserService = require('../services/user.service');

require('dotenv/config');

const secret = process.env.JWT_SECRET;

module.exports.authenticate = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(token, secret);
    const email = await UserService.getUserByEmail(decoded.data.email);

    if (!email) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};