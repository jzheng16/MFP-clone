const router = require('express').Router();
const { Measurement } = require('../../db/models');
const db = require('../../db');

router.get('/', (req, res) => {
  Measurement.findOne({ where: { user_id: 1 } })
    .then(measurement => {
      res.json(measurement);
    })
    .catch(err => console.log('error getting measurement', err));
});

router.post('/', (req, res) => {
  // console.log('req.body', typeof req.body.weight);
  // console.log('req.body', typeof JSON.parse(req.body.weight));
  // console.log('req.body', typeof JSON.stringify(req.body.weight));
  // console.log('req.body', req.body.weight);
  // console.log('req.body', JSON.stringify(req.body.weight));


  const updatedObj = {};
  Object.keys(req.body).forEach(key => {
    updatedObj[key] = db.fn('array_append', db.col(`${key}`), JSON.stringify(req.body[key]));
  });

  console.log(updatedObj);

  Measurement.update(updatedObj, {
    returning: true,
    plain: true,
    where: { user_id: 1 }
  })
    .then(updated => {
      res.json(updated[1]);
    })
    .catch(err => console.log('err', err));
});
module.exports = router;
