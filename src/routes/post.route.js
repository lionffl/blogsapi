const express = require('express');
const { authenticate } = require('../auth/authenticate');
const BlogPostController = require('../controllers/post.controller');
const { postFieldsValidation } = require('../middlewares/postFieldsValidation');
const { postIdValidation } = require('../middlewares/postIdValidation');

const route = express.Router();

route.use(authenticate);

route.route('/:id')
  .get(postIdValidation, BlogPostController.getFullPostById);

route.route('/')
  .post(postFieldsValidation, BlogPostController.create)
  .get(BlogPostController.getAll);

module.exports = route;