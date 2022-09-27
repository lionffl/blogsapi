const getUserId = require('../helpers/getUserId');
const BlogPostService = require('../services/post.service');
const PostCategoryService = require('../services/postCategory.service');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const token = req.header('Authorization');
  const userId = await getUserId(token);
  let post = await BlogPostService.create(title, content, userId, categoryIds);
  post = await BlogPostService.getPostById(post.id);
  PostCategoryService.create(post.id, categoryIds);
  res.status(201).json(post);
};

const getAll = async (_req, res) => {
  const posts = await BlogPostService.getAll();
  res.status(200).json(posts);
};

const getFullPostById = async (req, res) => {
  const { id } = req.params;
  const post = await BlogPostService.getFullPostById(id);
  res.status(200).json(post);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  await BlogPostService.update(title, content, id);
  const post = await BlogPostService.getFullPostById(id);
  res.status(200).json(post);
};

const destroy = async (req, res) => {
  const { id } = req.params;
  BlogPostService.destroy(id);
  res.status(204).end();
};

const getPostByTitleOrContent = async (req, res) => {
  const { q } = req.query;
  const post = await BlogPostService.getPostByTitleOrContent(q);
  res.status(200).json(post);
};

module.exports = {
  create,
  getAll,
  getFullPostById,
  update,
  destroy,
  getPostByTitleOrContent,
};