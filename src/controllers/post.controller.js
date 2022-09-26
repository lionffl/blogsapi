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

const getFullPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await BlogPostService.getFullPostById(id);
    res.status(200).json(post);
  } catch (error) {
    console.error(error.message);
    res.status(400).json(objError);
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    await BlogPostService.update(title, content, id);
    const post = await BlogPostService.getFullPostById(id);
    res.status(200).json(post);
  } catch (error) {
    console.error(error.message);
    res.status(400).json(objError);
  }
};

const destroy = async (req, res) => {
  const { id } = req.params;
  try {
    BlogPostService.destroy(id);
    res.status(204).end();
  } catch (error) {
    console.error(error.message);
    res.status(400).json(objError);
  }
};

const getPostByTitleOrContent = async (req, res) => {
  const { q } = req.query;
  try {
    const post = await BlogPostService.getPostByTitleOrContent(q);
    res.status(200).json(post);
  } catch (error) {
    console.error(error.message);
    res.status(400).json(objError);
  }
};

module.exports = {
  create,
  getAll,
  getFullPostById,
  update,
  destroy,
  getPostByTitleOrContent,
};