const getUserId = require('../helpers/getUserId');
const { getFullPostById } = require('../services/post.service');

module.exports.postUserValidation = async (req, res, next) => {
  const token = req.header('Authorization');
  const { id } = req.params;
  try {
    const ownerUserId = await getUserId(token);
    const post = await getFullPostById(id);
    if (post.user.id !== ownerUserId) return res.status(401).json({ message: 'Unauthorized user' });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: 'Something is wrong.' });
  }

  next();
};