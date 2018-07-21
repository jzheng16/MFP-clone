// Connect to your db
const Sequelize = require('sequelize');
const config = require('../config');

// If you deploy your app to something like heroku, your db url will be available on database_url.
// const db = new Sequelize('postgres://localhost:5432/mfp-clone', {
const db = new Sequelize(
  config.DB_NAME,
  config.USERNAME,
  config.PASSWORD,
  {
    dialect: 'postgres',
    operatorsAliases: false,
    logging: false,
    define: {
      underscored: true,
      freezeTableName: true,
    }
  },
);
module.exports = db;

require('./models');

db.didSync = db.sync()
  .then(() => console.log('sync successful'));
