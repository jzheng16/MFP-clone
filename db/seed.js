const db = require('./');
const seed = require('./seed_data');

const {
  User, Dates, Food, Goal, Activity, Plan, Exercise, Measurement
} = seed;

const seedUsers = () => db.Promise.map(User, user => db.model('users').create(user));
const seedFoods = () => db.Promise.map(Food, food => db.model('food').create(food));
const seedDates = () => db.Promise.map(Dates, day => db.model('date').create(day));
const seedGoals = () => db.Promise.map(Goal, goal => db.model('goal').create(goal));
const seedActivity = () => db.Promise.map(Activity, activity => db.model('activity').create(activity));
const seedPlan = () => db.Promise.map(Plan, plan => db.model('plan').create(plan));
const seedExercise = () => db.Promise.map(Exercise, exercise => db.model('exercise').create(exercise));
const seedMeasurement = () => db.Promise.map(Measurement, measurement => db.model('measurement').create(measurement));

db.didSync
  .then(() => db.sync({ force: true }))
  .then(seedUsers)
  .then(seedFoods)
  .then(seedDates)
  .then(seedGoals)
  .then(seedActivity)
  .then(seedPlan)
  .then(seedExercise)
  .then(seedMeasurement)
  .then(() => console.log('database seeded successfully'))
  .catch(error => console.error(error))
  .finally(() => db.close());
