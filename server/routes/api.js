const api = require('express').Router();

// 404 error handling placed at end of api route
api
  .use('/food', require('./food.js'))
  .use('/auth', require('./auth'))
  .use('/goal', require('./goal'))
  .use('/diary', require('./diary'))
  .use('/date', require('./date'))
  .use('/measurement', require('./measurement'));

// No routes hit?
api.use((req, res) => res.status(404).end());
module.exports = api;
