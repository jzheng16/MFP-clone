const db = require('./');
const seed = require('./seed_data');


const seedUsers = () => db.Promise.map(seed.User, user => db.model('user').create(user));
const seedFoods = () => db.Promise.map(seed.Food, food => db.model('food').create(food));
const seedDates = () => db.Promise.map(seed.Dates, day => db.model('date').create(day));
const seedGoals = () => db.Promise.map(seed.Goal, goal => db.model('goal').create(goal));
const seedDiary = () => db.Promise.map(seed.Diary, diary => db.model('diary').create(diary));
// const seedDiaryFood = () => db.Promise.map(seed.Diary_Food, diary_food => db.model('diary_food').create(diary_food));

db.didSync
  .then(() => db.sync({ force: true }))
  .then(seedUsers)
  .then(seedFoods)
  .then(seedDates)
  .then(seedGoals)
  .then(seedDiary)
  // .then(seedDiaryFood)
  .then(() => console.log('database seeded successfully'))
  .catch(error => console.error(error))
  .finally(() => db.close());
