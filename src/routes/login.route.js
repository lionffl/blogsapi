const express = require('express');
const LoginController = require('../controllers/login.controller');
const { loginFieldsValidation } = require('../middlewares/loginFieldsValidation');

const route = express.Router();

route.post('/', loginFieldsValidation, LoginController.login);

module.exports = route;