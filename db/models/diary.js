const db = require('../');
const Sequelize = require('sequelize');

const Diary = db.define('diary', {
  mealType: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  qty: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Diary;
