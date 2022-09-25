const getUserId = require('../helpers/getUserId');
const BlogPostService = require('../services/post.service');
const PostCategoryService = require('../services/postCategory.service');

const objError = { message: 'Something is wrong.' };

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const token = req.header('Authorization');
  try {
    const userId = await getUserId(token);
    let post = await BlogPostService.create(title, content, userId, categoryIds);
    post = await BlogPostService.getPostById(post.id);
    PostCategoryService.create(post.id, categoryIds);
    res.status(201).json(post);
  } catch (error) {
    console.error(error.message);
    res.status(400).json(objError);
  }
};

const getAll = async (_req, res) => {
  try {
    const posts = await BlogPostService.getAll();
    res.status(200).json(posts);
  } catch (error) {
    console.error(error.message);
    res.status(400).json(objError);
  }
};

module.exports = {
  create,
  getAll,
};