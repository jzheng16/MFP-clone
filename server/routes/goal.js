const { Goal } = require('../../db/models');
const router = require('express').Router();
const db = require('../../db');
// Query the user and eager load his goals

router.post('/creategoal', (req, res) => {
  Goal.findOrCreate({
    where: { user_id: req.user.dataValues.id },
    defaults: req.body
  })
    .spread(goal => {
      Promise.all([goal.getPlan(), goal.getActivity()])
        .then(values => {
          const newGoal = { ...goal.dataValues, plan: values[0].dataValues, activity: values[1].dataValues };
          res.json(newGoal);
        })
        .catch(err => console.error('error creating goalsss', err));
    });
});

router.get('/goal', (req, res) => {
  Goal.findOne({
    include: [
      { model: db.model('plan') },
      { model: db.model('activity') }],
    where: { user_id: req.user.dataValues.id }
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
      where: { user_id: req.user.dataValues.id },
      returning: true,
      plain: true
    }
  )
    .then(goal => {
      Promise.all([goal[1].getPlan(), goal[1].getActivity()])
        .then(values => {
          if (values[0]) {
            console.log(values);
            const newGoal = { ...goal[1].dataValues, plan: values[0].dataValues, activity: values[1].dataValues };
            res.json(newGoal);
          } else {
            res.json(goal[1]);
          }
        })
        .catch(err => console.error('error creating goal', err));
    });
});

module.exports = router;
