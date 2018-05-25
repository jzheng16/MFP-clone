const db = require('../');
const Sequelize = require('sequelize');

const Diary = db.define('diary', {
  db_food_entry: {
    type: Sequelize.ARRAY(Sequelize.ARRAY(Sequelize.INTEGER)),
    defaultValue: [[]],
    allowNull: false
  },
  user_food_entry: {
    type: Sequelize.ARRAY(Sequelize.ARRAY(Sequelize.INTEGER)),
    defaultValue: [[]],
    allowNull: false
  }
});

module.exports = Diary;
