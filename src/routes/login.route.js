const express = require('express');
const LoginController = require('../controllers/login.controller');
const { loginFieldsValidation } = require('../middlewares/loginFieldsValidation');
const errorHandler = require('../middlewares/errorHandler');
require('express-async-errors');

const route = express.Router();

route.post('/', loginFieldsValidation, LoginController.login);

route.use(errorHandler);

module.exports = route;