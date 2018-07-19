const db = require('../');
const Sequelize = require('sequelize');

const Diary = db.define('diary', {
  mealType: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  qty: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Diary;


// db_food_entry: {
//   type: Sequelize.ARRAY(Sequelize.ARRAY(Sequelize.INTEGER)),
//     defaultValue: [],
//       allowNull: false
// },
// user_food_entry: {
//   type: Sequelize.ARRAY(Sequelize.ARRAY(Sequelize.INTEGER)),
//     defaultValue: [],
//       allowNull: false
// }