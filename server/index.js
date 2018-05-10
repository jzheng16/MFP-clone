const express = require('express');
const passport = require('passport');
const session = require('express-session');
const path = require('path');
const morgan = require('morgan');
const db = require('../db');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const myStore = new SequelizeStore({ db });

const app = express();
const PORT = process.env.PORT || 3000;

// Create a session for each request Session Middleware
app.use(session({
  secret: process.env.SESSION_SECRET || 'test secret only for development',
  resave: false,
  saveUninitialized: false,
  store: myStore
}));

// Body parsing middleware, body-parser is now built into express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

// Authentication middleware
app.use(passport.initialize());
app.use(passport.session());

// Serve up static files in public folder
app.use(express.static(path.resolve(__dirname, '..', 'public')));

// Serve our api
app.use('/api', require('./routes/api'));

// For an express server, MAKE SURE send index.html for anything else (put at the end  usually except error handling)
app.get('/*', (req, res) =>
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html')));

// Error handling just in case something broke
app.use((err, req, res) => {
  console.log(err.stack);
  res.status(500).send(err.message || 'Something broke!');
});

const server = app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

myStore.sync();
