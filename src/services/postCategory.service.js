const { PostCategory } = require('../models');

const create = (postId, categoryIds) => {
  const bulk = categoryIds.map((categoryId) => ({ postId, categoryId }));
  PostCategory.bulkCreate(bulk);
};

module.exports = {
  create,
};