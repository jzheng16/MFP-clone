const router = require('express').Router();
const db = require('../../db');

const Date = db.model('date');

router.get('/:date', (req, res) => {
  Date.find({
    where: {
      day: req.params.date
    }
  })
    .then(day => res.json(day));
});

module.exports = router;
