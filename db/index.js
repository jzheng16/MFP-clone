// Connect to your db
const Sequelize = require('sequelize');

// If you deploy your app to something like heroku, your db url will be available on database_url.
const db = new Sequelize('mfp-clone', 'joey', 'hello', {
  dialect: 'postgres',
  logging: false,
  define: {
    underscored: true, // use snake_case rather than camelCase column names
    freezeTableName: true, // don't change table names from the one specified
    timestamps: true, // automatically include timestamp columns
    operatorsAliases: false
  },
});
module.exports = db;

require('./models');

db.didSync = db
  .sync()
  .then(() => console.log('sync successful'));
