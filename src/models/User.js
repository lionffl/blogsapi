const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false, 
    },
    displayName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    }
  }, {
    timestamps: false,
    underscored: true,
  })

  User.associate = (models) => {
    User.hasMany(models.BlogPost, { foreignKey: 'userId', as: 'blog_posts' })
  };
  
  return User;
};

module.exports = UserModel;