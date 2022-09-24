const express = require('express');
const loginRoute = require('./login.route');
const userRoute = require('./user.route');

const routes = express.Router();

routes.use('/login', loginRoute);
routes.use('/user', userRoute);

module.exports = routes;