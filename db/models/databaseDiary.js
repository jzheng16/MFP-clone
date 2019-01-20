const Sequelize = require('sequelize');
const db = require('../');

const DatabaseDiary = db.define('database_diary', {
  databaseId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  mealType: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  qty: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = DatabaseDiary;
