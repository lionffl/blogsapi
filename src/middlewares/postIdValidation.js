const BlogPostService = require('../services/post.service');

module.exports.postIdValidation = async (req, res, next) => {
  const { id } = req.params;
  try {
    const post = await BlogPostService.getPostById(id);
    if (!post) return res.status(404).json({ message: 'Post does not exist' });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: 'Something is wrong.' });
  }

  next();
};