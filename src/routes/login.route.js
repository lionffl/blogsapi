const express = require('express');
const UserController = require('../controllers/user.controller');
const loginFieldsValidation = require('../middlewares/loginFieldsValidation');

const route = express.Router();

route.post('/', loginFieldsValidation, UserController.login);

module.exports = route;