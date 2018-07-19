const router = require('express').Router();
const db = require('../../db');
const fp = require('lodash/fp');

const Diary = db.model('diary');

router.get('/:date_id', (req, res) => {
  Diary.findAll({
    include: [{
      model: db.model('food')
    }],
    where: {
      user_id: req.user.dataValues.id,
      date_id: req.params.date_id,
    }
  })
    .then(entry => res.json(entry))
    .catch(error => console.error('err', error));
});


// Update diary with food info
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
            where: {
              user_id: req.user.dataValues.id,
              date_id: req.body.date_id,
              food_id: req.body.food_id,
              mealType: req.body.mealType
            }
          }
        )
          .then(updatedEntry => {
            updatedEntry[1][0].getFood()
              .then(food => {
                const foodObj = updatedEntry[1][0].dataValues;
                foodObj.food = food.dataValues;
                res.json(foodObj);
              });
          });
      }
    });
});

router.post('/delete', (req, res) => {
  console.log('what is req.body', req.body);
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

// Will be sent the updated user food entry OR db food entry depending on what is deleted
// router.post('/diaryentry', (req, res) => {
//   console.log('what is req.body?', req.body);
//   if (req.body.user_food_entry) {
//     Diary.find({
//       where: {
//         user_id: req.user.dataValues.id,
//         date_id: req.body.date_id
//       }
//     })
//       .then(entry => {
//         let index = -1;
//         for (let i = 0; i < entry.user_food_entry.length; i += 1) {
//           if (entry.user_food_entry[i][0] === req.body.user_food_entry[0] && entry.user_food_entry[i][1] === req.body.user_food_entry[1]) {
//             index = i;
//           }
//           if (R.contains(R.slice(0, 1, req.body.user_food_entry), R.slice(0, 1, entry.user_food_entry[i]))) {
//             console.log('hahaha');
//           }
//         }

//         entry.user_food_entry.splice(index, 1);


//         entry.update({
//           user_food_entry: entry.user_food_entry
//         }, {
//             where: {
//               user_id: req.body.user_id,
//               date_id: req.body.date_id
//             }
//           })
//           .then((finalentry => res.json(finalentry)));
//       })
//       .catch(error => console.error('trouble removing diary entry', error));
//   } else {
//     Diary.find({
//       where: {
//         user_id: req.user.dataValues.id,
//         date_id: req.body.date_id
//       }
//     })
//       .then(entry => {
//         let index = -1;
//         for (let i = 0; i < entry.db_food_entry.length; i += 1) {
//           if (entry.db_food_entry[i][0] === req.body.db_food_entry[0] && entry.db_food_entry[i][1] === req.body.db_food_entry[1]) {
//             index = i;
//           }
//         }

//         entry.db_food_entry.splice(index, 1);


//         entry.update({
//           db_food_entry: entry.db_food_entry
//         }, {
//             where: {
//               user_id: req.body.user_id,
//               date_id: req.body.date_id
//             }
//           })
//           .then(finalentry => {
//             console.log('final entry', finalentry.dataValues);
//             res.json(finalentry);
//           });
//       })
//       .catch(error => console.error('trouble removing diary entry', error));
//   }
// });

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
//  router.post('/', (req, res) => {
//   Diary.findOrCreate({
//     where: {
//       user_id: req.body.user_id,
//       date_id: req.body.date_id
//     }
//   })
//     .spread((entry, created) => {
//       if (req.body.user_food_entry) {
//         console.log('Entry to be added: ', req.body.user_food_entry);
//         const user_entry_arr = [...entry.user_food_entry];
//         console.log('Current Array: ', user_entry_arr);
//         const newEntry = req.body.user_food_entry;
//         let existingIndex = -1;
//         user_entry_arr.forEach((foodEntry, index) => {
//           if (fp.isEqual(foodEntry.slice(0, 2), newEntry.slice(0, 2))) {
//             existingIndex = index;
//           }
//         });
//         if (existingIndex > -1) {
//           user_entry_arr[existingIndex][2] += newEntry[2];
//           console.log('Updated Array: ', user_entry_arr);
//         } else {
//           user_entry_arr.push(newEntry);
//           console.log('Updated Array: ', user_entry_arr);
//         }

//         entry.update({
//           user_food_entry: user_entry_arr
//         })
//           .then(finalEntry => {
//             console.log('entry sent to front-end');
//             res.json(finalEntry)
//           })
//           .catch(err => console.error('err adding food to diary', err));
//       } else if (req.body.db_food_entry) {
//         const newEntry = req.body.db_food_entry;
//         let existingIndex = -1;
//         entry.db_food_entry.forEach((foodEntry, index) => {
//           if (fp.isEqual(foodEntry.slice(0, 2), newEntry.slice(0, 2))) {
//             existingIndex = index;
//           }
//         });
//         if (existingIndex > -1) {
//           entry.db_food_entry[existingIndex][2] += newEntry[2];
//         } else {
//           entry.db_food_entry.push(newEntry);
//         }

//         entry.update({
//           db_food_entry: entry.db_food_entry
//         })
//           .then(finalEntry => res.json(finalEntry))
//           .catch(err => console.error('err adding food to diary', err));
//       }
//     });
// });
