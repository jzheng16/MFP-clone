const router = require('express').Router();
const db = require('../../db');

const Diary = db.model('diary');
const DiaryDatabase = db.model('database_diary');

router.get('/:date_id', (req, res) => {
  Diary.findAll({
    include: [{ model: db.model('food') }],
    where: {
      user_id: req.user.dataValues.id,
      date_id: req.params.date_id,
    }
  })
    .then(entry => res.json(entry))
    .catch(error => console.error('err', error));
});

router.get('/database/:date_id', (req, res) => {
  DiaryDatabase.findAll({
    where: {
      user_id: req.user.dataValues.id,
      date_id: req.params.date_id
    }
  })
    .then(entry => res.json(entry))
    .catch(error => console.error('trouble receiving entries from database diary table', error));
});

router.post('/databasediary', (req, res) => {
  DiaryDatabase.findOrCreate({
    where: {
      user_id: req.user.dataValues.id,
      date_id: req.body.date_id,
      databaseId: req.body.databaseId,
      mealType: req.body.mealType
    },
    defaults: req.body,
  })
    .spread((entry, created) => {
      if (created) {
        res.json(entry);
      } else {
        DiaryDatabase.update({ qty: entry.qty + req.body.qty }, {
          returning: true,
          plain: true,
          where: {
            user_id: req.user.dataValues.id,
            date_id: req.body.date_id,
            databaseId: req.body.databaseId,
            mealType: req.body.mealType
          }
        })
          .then(updatedEntry => res.json(updatedEntry[1]));
      }
    })
    .catch(error => console.error('trouble receiving entries from database diary table', error));
});

router.post('/', (req, res) => {
  Diary.findOrCreate({
    where: {
      user_id: req.user.dataValues.id,
      date_id: req.body.date_id,
      food_id: req.body.food_id,
      mealType: req.body.mealType
    },
    defaults: req.body,
  })
    .spread((entry, created) => {
      if (created) {
        entry.getFood()
          .then(food => {
            const foodObj = entry.dataValues;
            foodObj.food = food.dataValues;
            res.json(foodObj);
          });
      } else {
        Diary.update(
          { qty: entry.qty + req.body.qty },
          {
            returning: true,
            plain: true,
            where: {
              user_id: req.user.dataValues.id,
              date_id: req.body.date_id,
              food_id: req.body.food_id,
              mealType: req.body.mealType
            }
          }
        )
          .then(updatedEntry => {
            updatedEntry[1].getFood()
              .then(food => {
                const foodObj = updatedEntry[1].dataValues;
                foodObj.food = food.dataValues;
                res.json(foodObj);
              });
          });
      }
    })
    .catch(err => console.error('trouble adding food', err));
});

router.post('/delete', (req, res) => {
  Diary.destroy({
    where: {
      user_id: req.user.dataValues.id,
      date_id: req.body.date_id,
      food_id: req.body.food_id,
      mealType: req.body.mealType
    }
  })
    .then(deletedRows => res.json(`successfully removed ${deletedRows} rows`))
    .catch(err => console.error('trouble removing food', err));
});

router.post('/databasediary/delete', (req, res) => {
  DiaryDatabase.destroy({
    where: {
      user_id: req.user.dataValues.id,
      date_id: req.body.date_id,
      databaseId: req.body.databaseId,
      mealType: req.body.mealType
    }
  })
    .then(deletedRows => res.json(`successfully removed ${deletedRows} rows`))
    .catch(err => console.error('trouble removing food', err));
});

module.exports = router;
