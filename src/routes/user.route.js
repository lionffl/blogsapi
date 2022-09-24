const express = require('express');
const UserController = require('../controllers/user.controller');
const { userFieldsValidation } = require('../middlewares/userFieldsValidation');
const { userEmailValidation } = require('../middlewares/userEmailValidation');
const { userIdValidation } = require('../middlewares/userIdValidation');
const { authenticate } = require('../auth/authenticate');

const route = express.Router();

route.route('/:id')
  .get(authenticate, userIdValidation, UserController.getUserById);

route.route('/')
  .post(userFieldsValidation, userEmailValidation, UserController.create)
  .get(authenticate, UserController.getAll);

module.exports = route;