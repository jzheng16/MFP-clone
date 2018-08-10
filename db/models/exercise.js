const Sequelize = require('sequelize');
const db = require('../');

const Exercise = db.define('exercise', {
  name: { type: Sequelize.STRING },
  description: { type: Sequelize.TEXT }
});

module.exports = Exercise;
