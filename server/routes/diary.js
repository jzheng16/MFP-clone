const router = require('express').Router();
const db = require('../../db');

const Diary = db.model('diary');
// const Date = db.model('date');


router.get('/:date_id', (req, res) => {
  console.log('what is req.body?', req.body);
  Diary.findOne({
    where: {
      user_id: req.user.dataValues.id,
      date_id: req.params.date_id
    }
  })
    .then(entry => {
      console.log('entry', entry);
      res.json(entry);
    })
    .catch(error => console.error('err', error));
});

router.post('/', (req, res) => {
  Diary.findOrCreate({
    where: {
      user_id: req.body.user_id,
      date_id: req.body.date_id
    }
  })
    .spread((entry, created) => {
      if (req.body.user_food_entry) {
        entry.user_food_entry.push(req.body.user_food_entry);
        entry.update({
          user_food_entry: entry.user_food_entry
        }, {
          where: {
            user_id: req.body.user_id,
            date_id: req.body.date_id
          }
        })
          .then(finalEntry => res.json(finalEntry));
      } else if (req.body.db_food_entry) {
        entry.db_food_entry.push(req.body.db_food_entry);
        entry.update({
          db_food_entry: entry.db_food_entry
        }, {
          where: {
            user_id: req.body.user_id,
            date_id: req.body.date_id
          }
        })
          .then(finalEntry => res.json(finalEntry))
          .catch(error => console.error('err', error));
      }
    });
});

// Works but when a new entry is initialized, it isn't an array of arrays..
/*
 Diary.update(
          {
            db_food_entry: db.fn('||', req.body.db_food_entry, db.col('db_food_entry'))
          },
          {
            where: {
              user_id: req.body.user_id,
              date_id: req.body.date_id
            }
          }
        );
      }
*/
module.exports = router;
