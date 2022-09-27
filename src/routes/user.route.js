const express = require('express');
const UserController = require('../controllers/user.controller');
const { userFieldsValidation } = require('../middlewares/userFieldsValidation');
const { userEmailValidation } = require('../middlewares/userEmailValidation');
const { userIdValidation } = require('../middlewares/userIdValidation');
const { authenticate } = require('../auth/authenticate');
const errorHandler = require('../middlewares/errorHandler');
require('express-async-errors');

const route = express.Router();

route.route('/me').delete(authenticate, UserController.destroy);

route.route('/:id').get(authenticate, userIdValidation, UserController.getUserById);

route.route('/')
  .post(userFieldsValidation, userEmailValidation, UserController.create)
  .get(authenticate, UserController.getAll);

route.use(errorHandler);

module.exports = route;