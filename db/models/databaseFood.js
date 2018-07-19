const Sequelize = require('sequelize');
const db = require('../');

const DatabaseFood = db.define('database_food', {
  databaseId: {
    type: Sequelize.INTEGER,
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

module.exports = DatabaseFood;