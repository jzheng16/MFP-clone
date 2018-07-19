const Sequelize = require('sequelize');
const db = require('../');

const Diary_Food = db.define('diary_food', {
  mealType: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  qty: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Diary_Food;