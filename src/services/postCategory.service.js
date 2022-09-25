const { PostCategory } = require('../models');

const create = (postId, categoryIds) => {
  categoryIds.forEach((categoryId) => {
    PostCategory.sequelize.query(
      'INSERT INTO posts_categories (post_id, category_id) VALUES (?,?)', 
      {
        replacements: [postId, categoryId],
      },
    );
  });
};

module.exports = {
  create,
};