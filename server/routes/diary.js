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
  console.log('what is req.body?', req.body);
  Diary.findOrCreate({
    where: {
      user_id: req.body.user_id,
      date_id: req.body.date_id
    }
  })
    .spread((entry, created) => {
      entry.user_food_entry.push(req.body.user_food_entry);
      entry.update({
        user_food_entry: entry.user_food_entry
      }, {
        where: {
          user_id: req.body.user_id,
          date_id: req.body.date_id
        }
      })
        .then(finalEntry => {
          console.log('FINAL ENTRY?', finalEntry.dataValues);
          res.json(finalEntry);
        });
    })
    .catch(error => console.error('err', error));
});

// TODO: try this
/*
Room.update(
  { 'job_ids': db.fn('array_append', sequelize.col('user_food_entry'), req.body.user_food_entry) },
  { 'where': { 'id': roomId } }
);
*/

module.exports = router;
