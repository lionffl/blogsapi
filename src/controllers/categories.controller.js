const CategoriesService = require('../services/categories.service');

const objError = { message: 'Something is wrong.' };

const create = async (req, res) => {
  const { name } = req.body;
  try {
    const category = await CategoriesService.create(name);
    res.status(201).json(category.dataValues);
  } catch (error) {
    console.error(error.message);
    res.status(400).json((objError));
  }
};

const getAll = async (_req, res) => {
  try {
    const categories = await CategoriesService.getAll();
    res.status(200).json(categories);  
  } catch (error) {
    console.error(400).json(objError);
  }
};

module.exports = {
  create,
  getAll,
};