const { Goal } = require('../../db/models');
const router = require('express').Router();

// Query the user and eager load his goals
router.get('/goal', (req, res) => {
  console.log('What is req.user?', req.user.dataValues.id);
  Goal.findOne({
    where: {
      user_id: req.user.dataValues.id
    }
  })
    .then(goal => res.json(goal))
    .catch(err => console.error('cannot retrieve goals', err));
});

// Update goals
router.post('/goal', (req, res) => {
  Goal.update(
    {
      calorie: req.body.calorie,
      weight: req.body.weight,
      carbs: req.body.carbs,
      protein: req.body.protein,
      fat: req.body.fat,
    },
    {
      where: {
        user_id: req.user.dataValues.id
      },
      returning: true,
      plain: true
    }
  )
    .then(goal => {
      res.json(goal[1]);
    })
    .catch(err => console.error('cannot retrieve goals', err));
});

module.exports = router;
