const Food = require('./food');
const User = require('./user');
const Goal = require('./goal');

Goal.belongsTo(User);

module.exports = { Food, User, Goal };
