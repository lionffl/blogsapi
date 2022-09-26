const { Op } = require('sequelize');
const { BlogPost, User, Category } = require('../models');

const create = (title, content, userId) => BlogPost.create(
  { title, content, userId },
  );

const getPostById = (id) => BlogPost.findOne({
  where: { id },
});

const getAll = () => BlogPost.findAll({
  include: [
    { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
    { model: Category, as: 'categories' },
  ],
});

const getFullPostById = (id) => BlogPost.findOne({
  where: { id },
  include: [
    { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
    { model: Category, as: 'categories' },
  ],
});

const update = (title, content, id) => BlogPost.update({
  title, content,
}, { where: { id } });

const destroy = (id) => BlogPost.destroy({ 
  where: { id }, 
});

const getPostByTitleOrContent = (searchTerm) => BlogPost.findAll({
  where: {
    [Op.or]: [
      { title: { [Op.substring]: searchTerm } },
      { content: { [Op.substring]: searchTerm } },
    ],
  },
  include: [
    { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
    { model: Category, as: 'categories' },
  ],
});

module.exports = {
  create,
  getPostById,
  getFullPostById,
  getAll,
  update,
  destroy,
  getPostByTitleOrContent,
};