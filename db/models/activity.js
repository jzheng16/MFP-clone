const Sequelize = require('sequelize');
const db = require('../');

const Activity = db.define('activity', {
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  factor: {
    type: Sequelize.FLOAT
  }
});

module.exports = Activity;
