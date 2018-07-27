const db = require('./');
const seed = require('./seed_data');

const seedUsers = () => db.Promise.map(seed.User, user => db.model('users').create(user));
const seedFoods = () => db.Promise.map(seed.Food, food => db.model('food').create(food));
const seedDates = () => db.Promise.map(seed.Dates, day => db.model('date').create(day));
const seedGoals = () => db.Promise.map(seed.Goal, goal => db.model('goal').create(goal));
const seedActivity = () => db.Promise.map(seed.Activity, activity => db.model('activity').create(activity));
const seedPlan = () => db.Promise.map(seed.Plan, plan => db.model('plan').create(plan));

db.didSync
  .then(() => db.sync({ force: true }))
  .then(seedUsers)
  .then(seedFoods)
  .then(seedDates)
  .then(seedGoals)
  .then(seedActivity)
  .then(seedPlan)
  .then(() => console.log('database seeded successfully'))
  .catch(error => console.error(error))
  .finally(() => db.close());
