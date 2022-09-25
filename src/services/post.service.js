const { BlogPost } = require('../models');

const create = (title, content, userId) => BlogPost.create(
  { title, content, userId },
  );

const getPostById = (id) => BlogPost.findOne({
  where: { id },
});

module.exports = {
  create,
  getPostById,
};