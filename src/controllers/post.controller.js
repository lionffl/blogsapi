// const BlogPostService = require('../services/post.service');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const response = { title, content, categoryIds };
  res.status(201).json(response);
};

module.exports = {
  create,
};