const { BlogPost } = require('../models');

const create = (title, content, userId) => BlogPost.create(
  { title, content, userId },
  );

const findOne = (id) => BlogPost.findOne({
  where: { id },
});

module.exports = {
  create,
  findOne,
};