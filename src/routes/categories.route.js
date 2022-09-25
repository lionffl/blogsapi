const express = require('express');
const { authenticate } = require('../auth/authenticate');
const CategoriesController = require('../controllers/categories.controller');
const { categoriesFieldValidation } = require('../middlewares/categoriesFieldValidation');

const route = express.Router();

route.use(authenticate);
route.route('/')
  .post(categoriesFieldValidation, CategoriesController.create)
  .get(CategoriesController.getAll);

module.exports = route;