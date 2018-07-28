const router = require('express').Router();
const User = require('../../db/models/user');
const multer = require('multer');
const path = require('path');
const db = require('../../db');
// Multer allows you to upload files and store it in your filessystem

const storage = multer.diskStorage({ // Takes dest and filename
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, '../../uploads/')); // Where multer will store all uploads, must be static (public)
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // new Date().toISOString().replace(/:/g, '-')
  }

});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true); // Accept file
  } else {
    cb(null, false); // Reject
  }
};
const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // 5mb
  fileFilter
});

// User routes

router.post('/updateUserInfo', (req, res) => {
  User.update(
    {
      age: req.body.age,
      gender: req.body.gender,
      height: req.body.height,
      weight: db.fn('array_append', db.col('weight'), req.body.weight)
    },
    {
      returning: true,
      plain: true,
      where: { id: req.user.dataValues.id }
    }
  )
    .then(updatedUser => res.json(updatedUser[1]))
    .catch(err => console.error('POST error to updateUserInfo', err));
});

router.post('/uploadimage', upload.single('file'), (req, res) => {
  // New file object will be attached to req with properties: originalname, mimetype, destination, path
  User.update({ avatarUrl: req.file.path }, {
    returning: true,
    plain: true,
    where: { id: req.user.dataValues.id }
  })
    .then(updatedUser => {
      console.log(updatedUser[1]);
      res.json(updatedUser[1]);
    });
});

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
