const db = require('../');
const Sequelize = require('sequelize');

const Date = db.define('date', {
  day: {
    type: Sequelize.STRING
  },
  dow: {
    type: Sequelize.STRING,
    allowNull: true
  },
  created_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.fn('NOW'),
    allowNull: true
  },
  updated_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.fn('NOW'),
    allowNull: true
  }

});

module.exports = Date;
