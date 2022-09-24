const express = require('express');
const UserController = require('../controllers/user.controller');
const { userFieldsValidation } = require('../middlewares/userFieldsValidation');
const { userEmailValidation } = require('../middlewares/userEmailValidation');

const route = express.Router();

route.post('/', userFieldsValidation, userEmailValidation, UserController.create);

module.exports = route;