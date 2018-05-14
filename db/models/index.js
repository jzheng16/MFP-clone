const Food = require('./food');
const User = require('./user');
const Goal = require('./goal');
const Diary = require('./diary');
const Date = require('./date');

Goal.belongsTo(User);
User.hasMany(Diary);
Date.hasMany(Diary);
User.hasMany(Food);

module.exports = {
  Food, User, Goal, Diary, Date
};
