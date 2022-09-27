const express = require('express');
const { authenticate } = require('../auth/authenticate');
const CategoriesController = require('../controllers/categories.controller');
const { categoriesFieldValidation } = require('../middlewares/categoriesFieldValidation');
const errorHandler = require('../middlewares/errorHandler');
require('express-async-errors');

const route = express.Router();

route.use(authenticate);
route.route('/')
  .post(categoriesFieldValidation, CategoriesController.create)
  .get(CategoriesController.getAll);

route.use(errorHandler);

module.exports = route;