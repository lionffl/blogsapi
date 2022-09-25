const express = require('express');
const loginRoute = require('./login.route');
const userRoute = require('./user.route');
const categoriesRoute = require('./categories.route');

const routes = express.Router();

routes.use('/login', loginRoute);
routes.use('/user', userRoute);
routes.use('/categories', categoriesRoute);

module.exports = routes;