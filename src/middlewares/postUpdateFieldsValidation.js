const errorEmptyFieldsMsg = { message: 'Some required fields are missing' };

module.exports.postUpdateFieldsValidation = async (req, res, next) => {
  const { title, content } = req.body;
  if (!title || !content) return res.status(400).json(errorEmptyFieldsMsg);

  next();
};