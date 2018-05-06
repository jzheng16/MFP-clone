const db = require('../../db/');
const router = require('express').Router();

const Food = db.model('food');

router.get('/getfood', (req, res, next) => {
  Food.findAll()
    .then(foods => res.json(foods))
    .catch(err => console.error(err));
});

router.post('/addfood', (req, res, next) => {
  // Food object will be on the req.body
  Food.create(req.body)
    .then(createdFood => res.json(createdFood))
    .catch(err => console.error(err));
});

module.exports = router;
