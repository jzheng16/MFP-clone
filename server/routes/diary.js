const router = require('express').Router();
const db = require('../../db');

const Diary = db.model('diary');

router.get('/', (req, res) => {
  Diary.findAll()
    .then(entry => {
      console.log('entry', entry);
      res.json(entry);
    })
    .catch(error => console.error('err', error));
});

router.post('/', (req, res) => {
  Diary.create(req.body)
    .then(entry => {
      console.log('entry', entry);
      res.json(entry);
    })
    .catch(error => console.error('err', error));
});

module.exports = router;
