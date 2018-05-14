const db = require('../');
const Sequelize = require('sequelize');

const Diary = db.define('diary', {
  db_food_entry: {
    type: Sequelize.ARRAY(Sequelize.ARRAY(Sequelize.INTEGER)),
    defaultValue: []
  },
  user_food_entry: {
    type: Sequelize.ARRAY(Sequelize.ARRAY(Sequelize.INTEGER)),
    defaultValue: []
  },
  meal_type: {
    type: Sequelize.STRING
  }
});

module.exports = Diary;
