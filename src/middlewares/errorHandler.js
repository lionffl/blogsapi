const errorHandler = (_error, _req, res, _next) => {
  res.status(500).json({ message: 'Something is wrong' });
};

module.exports = errorHandler;