const api = require('express').Router();

// TODO Require in different routes that will be used for our api

// 404 error handling placed at end of api route
api.use('/food', require('./food.js'));

// No routes hit?
api.use((req, res) => res.status(404).end());
module.exports = api;
