/* eslint-disable */
const db = require('..');
const Sequelize = require('sequelize');
const crypto = require('crypto');

// TODO: Define constraints and encrypt password

const User = db.define(
  'user', {
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
      type: Sequelize.STRING
    },

  },
  {
    hooks: {
    },
    instanceMethods: {
      correctPassword: (userInputPassword) => User.encryptPassword(userInputPassword, this.salt()) === this.password()
    },
    classMethods: {
      generateSalt: () => crypto.randomBytes(16).toString('base64'),
      encryptPassword: (plaintext, salt) => crypto
        .createHash('RSA-SHA256')
        .update(plaintext)
        .update(salt)
        .digest('hex')
    }
  }
);

// Hooks to salt and hash password. Only do it if the password has been set or 'changed'
const setSaltAndPassword = user => {
  if (user.changed('password')) {
    user.salt = User.generateSalt();
    user.password = User.encryptPassword(user.password(), user.salt());
  }
};

User.beforeCreate(setSaltAndPassword);
User.beforeUpdate(setSaltAndPassword);


module.exports = User;