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
  })
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, { through: PostCategory })
    models.Category.belongsToMany(models.BlogPost, { through: PostCategory })
  };
  return PostCategory;
};

module.exports = PostCategoryModel;