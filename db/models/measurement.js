const db = require('../');
const Sequelize = require('sequelize');

const Measurement = db.define('measurement', {
  weight: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    defaultValue: []
  },
  calorie: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    defaultValue: []
  },
  protein: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    defaultValue: []
  },
  carbs: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    defaultValue: []
  },
  fat: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    defaultValue: []
  },
  arm: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    defaultValue: []
  },
  waist: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    defaultValue: []
  },
  neck: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    defaultValue: []
  },
  thigh: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    defaultValue: []
  },
  hips: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    defaultValue: []
  }
});

module.exports = Measurement;

