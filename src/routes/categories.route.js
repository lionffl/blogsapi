const express = require('express');
const { authenticate } = require('../auth/authenticate');
const CategoriesController = require('../controllers/categories.controller');
const { categoriesFieldValidation } = require('../middlewares/categoriesFieldValidation');

const route = express.Router();

route.post('/', authenticate, categoriesFieldValidation, CategoriesController.create);

module.exports = route;