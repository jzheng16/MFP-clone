const express = require('express');
const passport = require('passport');
const session = require('express-session');
const path = require('path');
const morgan = require('morgan');
const db = require('../db');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// webpack HMR
const webpack = require('webpack');
const config = require('../webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');

const compiler = webpack(config);

const myStore = new SequelizeStore({ db });

const app = express();
const PORT = process.env.PORT || 3000;

/*
Need to serialize user data so that subsequent requests will use information stored on cookie
instead of providing credentials all the time
Deserialization will run on each request to obtain the user information that is stored on a cookie session
*/

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  db.models.users.findById(id)
    .then(user => done(null, user))
    .catch(err => done(err));
});

// Body parsing middleware, body-parser is now built into express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

// webpack middleware
app.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath }));
app.use(require('webpack-hot-middleware')(compiler));

// Create a session for each request Session Middleware
app.use(session({
  secret: process.env.SESSION_SECRET || 'test secret only for development',
  resave: false,
  saveUninitialized: false,
  store: myStore
}));

// Authentication middleware
app.use(passport.initialize());
app.use(passport.session());


// Serve up static files in public folder
app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(express.static(path.resolve(__dirname, '..', 'uploads')));

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

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

myStore.sync();

