/* eslint-disable */
const db = require('..');
const Sequelize = require('sequelize');
const crypto = require('crypto');

// TODO: Define constraints 

const User = db.define(
  'users', {
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
      /* By making password a function, you are basically setting it private with closure.
        When querying, it will show only as a function and not plaintext
      */
      get() {
        return () => this.getDataValue('password');
      }
    },
    salt: {
      type: Sequelize.STRING,
      get() {
        return () => this.getDataValue('salt');
      }
    },
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    weight: {
      type: Sequelize.ARRAY(Sequelize.INTEGER)
    },
    avatarUrl: {
      type: Sequelize.STRING,
      allowNull: true
    },

  }
);

module.exports = User;

User.prototype.correctPassword = function (candidatePwd) {
  return User.encryptPassword(candidatePwd, this.salt()) === this.password();
};

User.generateSalt = function () {
  return crypto.randomBytes(16).toString('base64')
};

User.encryptPassword = function (plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
};

// Hooks to salt and hash password. Only do it if the password has been set or 'changed'
const setSaltAndPassword = user => {
  if (user.changed('password')) {
    user.salt = User.generateSalt()
    user.password = User.encryptPassword(user.password(), user.salt());
  }
};

User.beforeCreate(setSaltAndPassword);
User.beforeUpdate(setSaltAndPassword);