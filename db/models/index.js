const Food = require('./food');
const User = require('./user');
const Goal = require('./goal');
const Diary = require('./diary');
const Date = require('./date');
const Diary_Food = require('./diary-food');
const DatabaseDiary = require('./databaseDiary');

Goal.belongsTo(User);
User.hasMany(Diary);
Date.hasMany(Diary);
User.hasMany(Food);
Date.hasMany(DatabaseDiary);
User.hasMany(DatabaseDiary);

// Diary.belongsToMany(Food, { through: 'diary_food' });
// Food.belongsToMany(Diary, { through: 'diary_food' });
// Food.hasMany(Diary);
Diary.belongsTo(Food);
module.exports = {
  Food, User, Goal, Diary, Date, Diary_Food, DatabaseDiary
};
