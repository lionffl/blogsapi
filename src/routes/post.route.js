const express = require('express');
const { authenticate } = require('../auth/authenticate');
const BlogPostController = require('../controllers/post.controller');
const { postFieldsValidation } = require('../middlewares/postFieldsValidation');

const route = express.Router();

route.use(authenticate);
route.route('/')
  .post(postFieldsValidation, BlogPostController.create);

module.exports = route;