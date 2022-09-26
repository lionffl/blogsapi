const BlogPostService = require('../services/post.service');

module.exports.postEmptySearch = async (req, res, next) => {
  const { q } = req.query;
  if (q.length === 0) {
    try {
      const posts = await BlogPostService.getAll();
      res.status(200).json(posts);
    } catch (error) {
      console.error(error.message);
      res.status(400).json({ message: 'Something is wrong.' });
    }
  } else { next(); } 
};