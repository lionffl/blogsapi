const BlogPostService = require('../services/post.service');

const objError = { message: 'Something is wrong.' };

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  try {
    const post = await BlogPostService.create(title, content, categoryIds);
    res.status(201).json(post);
  } catch (error) {
    console.error(error.message);
    res.status(400).json(objError);
  }
};

module.exports = {
  create,
};