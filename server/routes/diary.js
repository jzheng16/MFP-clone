const router = require('express').Router();
const db = require('../../db');

const Diary = db.model('diary');
// const Date = db.model('date');


router.get('/:date_id', (req, res) => {
  Diary.findOne({
    where: {
      user_id: req.user.dataValues.id,
      date_id: req.params.date_id
    }
  })
    .then(entry => {
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

// Will be sent the updated user food entry OR db food entry depending on what is deleted
router.post('/diaryentry', (req, res) => {
  console.log('what is req.body?', req.body);
  if (req.body.user_food_entry) {
    Diary.find({
      where: {
        user_id: req.user.dataValues.id,
        date_id: req.body.date_id
      }
    })
      .then(entry => {
        let index = -1;
        for (let i = 0; i < entry.user_food_entry.length; i += 1) {
          if (entry.user_food_entry[i][0] === req.body.user_food_entry[0] && entry.user_food_entry[i][1] === req.body.user_food_entry[1]) {
            index = i;
          }
        }

        entry.user_food_entry.splice(index, 1);


        entry.update({
          user_food_entry: entry.user_food_entry
        }, {
          where: {
            user_id: req.body.user_id,
            date_id: req.body.date_id
          }
        })
          .then((finalentry => res.json(finalentry)));
      })
      .catch(error => console.error('trouble removing diary entry', error));
  } else {
    Diary.find({
      where: {
        user_id: req.user.dataValues.id,
        date_id: req.body.date_id
      }
    })
      .then(entry => {
        let index = -1;
        for (let i = 0; i < entry.db_food_entry.length; i += 1) {
          if (entry.db_food_entry[i][0] === req.body.db_food_entry[0] && entry.db_food_entry[i][1] === req.body.db_food_entry[1]) {
            index = i;
          }
        }

        entry.db_food_entry.splice(index, 1);


        entry.update({
          db_food_entry: entry.db_food_entry
        }, {
          where: {
            user_id: req.body.user_id,
            date_id: req.body.date_id
          }
        })
          .then(finalentry => {
            console.log('final entry', finalentry.dataValues);
            res.json(finalentry);
          });
      })
      .catch(error => console.error('trouble removing diary entry', error));
  }
});

// Works but when a new entry is initialized, it isn't an array of arrays..
/*
 Diary.update(
          {
            db_food_entry: db.fn('array_cat', req.body.db_food_entry, db.col('db_food_entry'))
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
