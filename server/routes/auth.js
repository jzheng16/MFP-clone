const router = require('express').Router();
const User = require('../../db/models/user');
const passport = require('passport');
const LocalStrategy = require('passport-local');

/*
Need to serialize user data so that subsequent requests will use information stored on cookie
instead of providing credentials all the time
Deserialization will run on each request to obtain the user information that is stored on a cookie session
*/
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => done(null, user))
    .catch(err => done(err));
});

// Implement local strategy (email / password)
passport.use(new LocalStrategy(((email, password, done) => {
  User.findOne({ where: { email } })
    .then(user => {
      if (!user) {
        return done(null, false, { message: 'Incorrect e-mail' });
      }
      // TODO: Write authenticate instance method for user. Remember instance methods return a promise
      return user.correctPassword(password)
        .then(authenticated => {
          if (!authenticated) {
            return done(null, false, { message: 'Incorrect password' });
          }
          return done(null, user);
        });
    });
})));

// Route for sign-up
router.post('/signup', (req, res, next) => {
  User.create(req.body)
    .then(user => {
      if (!user) {
        req.login(user, err => (err ? next(err) : res.json(user)));
      }
    })
    .catch(err => {
      if (err.name === 'SequelizeConstraintError') {
        res.status(401).send('E-mail already exists');
      } else {
        next(err);
      }
    });
});

// Create route to authenticate ? Not sure..
router.get('/me', (req, res) => res.json(req.user));

// Create routes for login
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

// Route for logout
router.get('/logout', (req, res) => {
  req.logout(); // Clear req.user object
  req.session.destroy();
  res.redirect('/');
});


// Alternative for login
// router.post('/login', (req, res, next) => {
//   User.findOne({ where: { email: req.body.email } })
//     .then(user => {
//       if (!user) {
//         console.log('No such user found:', req.body.email)
//         res.status(401).send('Wrong username and/or password')
//       } else if (!user.correctPassword(req.body.password)) {
//         console.log('Incorrect password for user:', req.body.email)
//         res.status(401).send('Wrong username and/or password')
//       } else {
//         req.login(user, err => (err ? next(err) : res.json(user)))
//       }
//     })
//     .catch(next)
// })


module.exports = router;
