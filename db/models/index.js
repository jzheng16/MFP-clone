const Food = require('./food');
const User = require('./user');
const Goal = require('./goal');
const Diary = require('./diary');
const Date = require('./date');
const Diary_Food = require('./diary-food');
const DatabaseFood = require('./databaseFood');

Goal.belongsTo(User);
User.hasMany(Diary);
Date.hasMany(Diary);
User.hasMany(Food);
Diary.hasMany(DatabaseFood);

// Diary.belongsToMany(Food, { through: 'diary_food' });
// Food.belongsToMany(Diary, { through: 'diary_food' });
// Food.hasMany(Diary);
Diary.belongsTo(Food);
module.exports = {
  Food, User, Goal, Diary, Date, Diary_Food, DatabaseFood
};
