const CategoriesService = require('../services/categories.service');

const errorEmptyFieldsMsg = { message: 'Some required fields are missing' };
const errorInvalidCategoryMsg = { message: '"categoryIds" not found' };

module.exports.postFieldsValidation = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content) return res.status(400).json(errorEmptyFieldsMsg);

  const categories = await CategoriesService.getAll();
  const isSomeCategoryValid = categories.some(({ id }) => categoryIds.includes(id));

  if (!isSomeCategoryValid) return res.status(400).json(errorInvalidCategoryMsg);

  next();
};