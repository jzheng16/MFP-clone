const router = require('express').Router();
const User = require('../../db/models/user');
const Goal = require('../../db/models/goal');
const Verification = require('../../db/models/verification');
const multer = require('multer');
const path = require('path');
const db = require('../../db');
const nodemailer = require('nodemailer');
const shortid = require('shortid');
const CONFIG = require('../../config');

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
  console.log('user id?', req.user.dataValues.id);
  console.log('req.body', req.body);
  if (req.body.weight) {
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
  } else {
    User.update(req.body, {
      returning: true,
      plain: true,
      where: { id: req.user.dataValues.id }
    })
      .then(updatedUser => res.json(updatedUser[1]))
      .catch(err => console.error('error to updateUserInfo', err));
  }
});

router.post('/uploadimage', upload.single('file'), (req, res) => {
  // New file object will be attached to req with properties: originalname, mimetype, destination, path
  User.update({ avatarUrl: req.file.originalname }, {
    returning: true,
    plain: true,
    where: { id: req.user.dataValues.id }
  })
    .then(updatedUser => {
      res.json(updatedUser[1]);
    });
});

// Change password

router.post('/changepassword', (req, res) => {
  User.findOne({ where: { id: req.user.dataValues.id } })
    .then(user => {
      if (!user.correctPassword(req.body.currentPassword)) {
        res.send('Entered incorrect password');
      } else {
        user.update({ password: req.body.newPassword }, {
          returning: true,
          plain: true,
        })
          .then(updatedUser => {
            res.json(updatedUser);
          });
      }
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
        Goal.create({ user_id: user.id })
          .then(() => req.login(user, err => (err ? next(err) : res.json(user))))
          .catch(err => console.log('err creating goal during signup', err));
      }
    })
    .catch(err => {
      if (err.name === 'SequelizeUniqueConstraintError') {
        res.status(401).send('E-mail already exists');
      } else {
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

router.post('/sendemail', (req, res) => {
  const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: CONFIG.emailUsername,
      pass: CONFIG.emailPassword
    },
    logger: false,
    debug: false
  });

  const link = shortid.generate();

  const message = {
    from: ' "MyFitnessClone" <test.no.reply.mfpclone@gmail.com>',
    to: req.body.email,
    subject: 'MyFitnessClone E-mail verification needed!',
    html: `  <table border="0" cellPadding="0" cellSpacing="0" height="100%" width="100%" id="bodyTable">
    <tr>
      <td valign="top">
        <table border="0" cellPadding="20" cellSpacing="0" width="600px" id="emailContainer">
          <tr>
            <td align="center" valign="top">
              <table border="0" cellPadding="20" cellSpacing="0" width="100%" id="emailHeader">
                <tr>
                  <td align="center" valign="top" height="70px" style="font-size: 24px;color: white;background-color: #0070BF;vertical-align:middle">
                    <p> MyFitnessClone </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" valign="top">
              <table border="0" cellPadding="20" cellSpacing="0" width="100%" id="emailBody">
                <tr>
                  <td align="center" valign="top">
                    <h1> Welcome to MyFitnessClone </h1>
                    <p> Let's get started by verifying your e-mail. Verifying your e-mail helps you in case you ever forget your password. Don't worry, we will never send any further e-mails without your permission. </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" valign="top">
              <table border="0" cellPadding="20" cellSpacing="0" width="30%" id="emailHeader">
                <tr>
                  <td align="center" valign="top" style="background-color: #0070BF;border-radius: 5px;border: 2px solid #0070BF;padding: 10px;text-align: center;">
                    <a style="display: block;color: #ffffff;font-size: 12px;text-decoration: none;;" href="http://localhost:3000/verification/?verificationId=${link}">
                      Verify Email
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" valign="top">
              <table border="0" cellPadding="20" cellSpacing="0" width="100%" id="emailHeader">
                <tr>
                  <td align="left" valign="top" text-align: "left" style="color: #8c8c8c">
                    <p> Thank you, <br /> MyFitnessClone Team <br />(aka: one lonely developer) </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table >`

  };
  if (req.query.resend) {
    Verification.destroy({ where: { user_id: req.user.dataValues.id } })
      .then(() => {
        Verification.create({
          verificationId: link,
          user_id: req.user.dataValues.id
        })
          .then(() => {
            transport.sendMail(message, (error, info) => {
              if (error) {
                return console.log(error);
              }
              console.log('Message sent: %s', info.messageId);
              res.json('success');
            });
          });
      });
  } else {
    Verification.create({
      verificationId: link,
      user_id: req.user.dataValues.id
    })
      .then(() => {
        transport.sendMail(message, (error, info) => {
          if (error) {
            return console.log(error);
          }
          console.log('Message sent: %s', info.messageId);
          res.json('success');
        });
      });
  }
});

router.post('/verify', (req, res) => {
  console.log('req.body', req.body.verificationId);

  Verification.findOne({
    where: {
      verificationId: req.body.verificationId,
      user_id: req.user.dataValues.id
    }
  })
    .then(verified => {
      if (verified) {
        User.update(
          { verified: true },
          {
            returning: true,
            plain: true,
            where: { id: req.user.dataValues.id }
          }
        )
          .then(updatedUser => res.json(updatedUser[1]))
          .catch(err => console.log('Trouble verifying user', err));
      } else {
        res.status(401).send('Trouble validating user');
      }
    });
});


module.exports = router;
