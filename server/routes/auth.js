const router = require('express').Router();
const User = require('../../db/models/user');

// Login

router.post('/login', (req, res, next) => {
  User.findOne({ where: { email: req.body.email } })
    .then(user => {
      if (!user) {
        console.log('No such user found:', req.body.email);
        res.status(401).send('Wrong username and/or password');
      } else if (!user.correctPassword(req.body.password)) {
        console.log('Incorrect password for user:', req.body.email);
        res.status(401).send('Wrong username and/or password');
      } else {
        req.login(user, err => (err ? next(err) : res.json(user)));
      }
    })
    .catch(next);
});

// Route for sign-up TODO: Why req.login?
router.post('/signup', (req, res, next) => {
  User.create(req.body)
    .then(user => {
      if (user) {
        req.login(user, err => (err ? next(err) : res.json(user)));
      }
    })
    .catch(err => {
      if (err.name === 'SequelizeConstraintError') {
        res.status(401).send('E-mail already exists');
      } else {
        console.log('what is this error', err);
        next(err);
      }
    });
});

// Create route to fetch the logged in user. This route will be hit every time a user accesses our page
router.get('/me', (req, res) => {
  res.json(req.user);
});

// Route for logout
router.get('/logout', (req, res) => {
  req.logout(); // Clear req.user object
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
