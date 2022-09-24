const express = require('express');
const UserController = require('../controllers/user.controller');
const { userFieldsValidation } = require('../middlewares/userFieldsValidation');
const userAlreadyRegistred = require('../middlewares/userAlreadyRegistred');

const route = express.Router();

route.post('/', userFieldsValidation, userAlreadyRegistred, UserController.create);

module.exports = route;