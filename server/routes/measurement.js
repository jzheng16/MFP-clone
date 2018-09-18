const router = require('express').Router();
const { Measurement } = require('../../db/models');
const db = require('../../db');

router.get('/', (req, res) => {
  Measurement.findOne({ attributes: ['weight', 'calorie', 'protein', 'carbs', 'fat', 'arm', 'waist', 'neck', 'thigh', 'hips'] }, { where: { user_id: req.user.dataValues.id } })
    .then(measurement => {
      res.json(measurement);
    })
    .catch(err => console.log('error getting measurement', err));
});

router.post('/', (req, res) => {
  const updatedObj = {};
  Object.keys(req.body).forEach(key => {
    if (req.body[key]) {
      updatedObj[key] = db.fn('array_append', db.col(`${key}`), JSON.stringify(req.body[key]));
    }
  });

  console.log(updatedObj);

  Measurement.update(updatedObj, {
    returning: true,
    plain: true,
    where: { user_id: req.user.dataValues.id }
  })
    .then(updated => {
      res.json(updated[1]);
    })
    .catch(err => console.log('err', err));
});
module.exports = router;
