const { Category } = require('../models');

const create = (name) => Category.create({ name });

module.exports = {
  create,
};