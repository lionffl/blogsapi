const { Category } = require('../models');

const create = (name) => Category.create({ name });

const getAll = () => Category.findAll();

module.exports = {
  create,
  getAll,
};