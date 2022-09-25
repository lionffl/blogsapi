const PostCategoryModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'BlogPosts',
        key: 'id',
      }
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Categories',
        key: 'id',
      }
    },
  }, {
    underscored: true,
    timestamps: false,
    tableName: 'posts_categories',
  })
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, { through: PostCategory, as: 'categories', foreignKey: 'postId', otherKey: 'categoryId' })
    models.Category.belongsToMany(models.BlogPost, { through: PostCategory, as: 'blogPosts', foreignKey: 'categoryId', otherKey: 'postId' })
  };
  return PostCategory;
};

module.exports = PostCategoryModel;