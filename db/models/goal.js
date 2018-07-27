const Sequelize = require('sequelize');
const db = require('../');

const Goal = db.define('goal', {
  calorie: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  weight: {
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

module.exports = Goal;

