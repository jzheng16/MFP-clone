const db = require('../../db/');
const router = require('express').Router();

const Food = db.model('food');

router.get('/getfood', (req, res) => {
  Food.findAll({
    where: {
      user_id: req.user.dataValues.id
    }
  })
    .then(foods => res.json(foods))
    .catch(err => console.error(err));
});

router.post('/addfood', (req, res) => {
  // Food object will be on the req.body
  Food.create(req.body)
    .then(createdFood => res.json(createdFood))
    .catch(err => console.error(err));
});

router.get('/getfood/:foodId', (req, res) => {
  Food.findOne({
    where: {
      id: req.params.foodId
    }
  })
    .then(food => res.json(food))
    .catch(err => console.error('error retrieving user food', err));
});

module.exports = router;

