const express = require('express');
const UserController = require('../controllers/user.controller');
const { userFieldsValidation } = require('../middlewares/userFieldsValidation');
const { userEmailValidation } = require('../middlewares/userEmailValidation');
const { authenticate } = require('../auth/authenticate');

const route = express.Router();

route.post('/', userFieldsValidation, userEmailValidation, UserController.create);
route.get('/', authenticate, UserController.getAll);

module.exports = route;