const Sequelize = require('sequelize');
const db = require('..');

const Food = db.define('food', {
  name: {
    type: Sequelize.STRING,
  },
  calories: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  carbs: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  protein: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  fat: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }

});

module.exports = Food;
