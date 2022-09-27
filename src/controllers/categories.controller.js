const CategoriesService = require('../services/categories.service');

const create = async (req, res) => {
  const { name } = req.body;
  const category = await CategoriesService.create(name);
  res.status(201).json(category.dataValues);
};

const getAll = async (_req, res) => {
  const categories = await CategoriesService.getAll();
  res.status(200).json(categories);
};

module.exports = {
  create,
  getAll,
};