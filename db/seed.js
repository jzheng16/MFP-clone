const db = require('./');
const seed = require('./seed_data');


const seedUsers = () => db.Promise.map(seed.User, user => db.model('user').create(user));
const seedFoods = () => db.Promise.map(seed.Food, food => db.model('food').create(food));
const seedDates = () => db.Promise.map(seed.Date, day => db.model('date').create(day));
const seedGoals = () => db.Promise.map(seed.Goal, goal => db.model('goal').create(goal));

db.didSync
  .then(() => db.sync({ force: true }))
  .then(seedUsers)
  .then(seedFoods)
  .then(seedDates)
  .then(seedGoals)
  .then(() => console.log('database seeded successfully'))
  .catch(error => console.error(error))
  .finally(() => db.close);
