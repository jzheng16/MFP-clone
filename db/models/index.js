const Food = require('./food');
const User = require('./user');
const Goal = require('./goal');
const Diary = require('./diary');
const Date = require('./date');
const DatabaseDiary = require('./databaseDiary');
const Plan = require('./plan');
const Activity = require('./activity');

Goal.belongsTo(User);
User.hasMany(Diary);
Date.hasMany(Diary);
User.hasMany(Food);
Date.hasMany(DatabaseDiary);
User.hasMany(DatabaseDiary);
Diary.belongsTo(Food);
Goal.belongsTo(Plan);
Goal.belongsTo(Activity);
module.exports = { Food, User, Goal, Diary, Date, DatabaseDiary, Plan, Activity };
