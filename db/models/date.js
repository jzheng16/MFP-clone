const db = require('../');
const Sequelize = require('sequelize');

const Date = db.define('date', {
  day: { type: Sequelize.STRING },
  dow: {
    type: Sequelize.STRING,
    allowNull: true
  },

});

module.exports = Date;
