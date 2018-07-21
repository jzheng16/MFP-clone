const Food = require('./food');
const User = require('./user');
const Goal = require('./goal');
const Diary = require('./diary');
const Date = require('./date');
const DatabaseDiary = require('./databaseDiary');

Goal.belongsTo(User);
User.hasMany(Diary);
Date.hasMany(Diary);
User.hasMany(Food);
Date.hasMany(DatabaseDiary);
User.hasMany(DatabaseDiary);
Diary.belongsTo(Food);
module.exports = {
  Food, User, Goal, Diary, Date, DatabaseDiary
};
