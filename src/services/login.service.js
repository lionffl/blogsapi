const { User } = require('../models');

module.exports.login = (email, password) => User.findAll({
    where: { email, password },
});