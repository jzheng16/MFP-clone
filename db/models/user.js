/* eslint-disable */
const db = require('..');
const Sequelize = require('sequelize');
const crypto = require('crypto');

// TODO: Define constraints 

const User = db.define(
  'users', {
    email: {
      type: Sequelize.STRING,
      unique: true
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
    age: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    height: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    gender: {
      type: Sequelize.ENUM('M', 'F'),
      allowNull: true
    },
    verified: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }


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

const capitalizeFirstLetter = user => {
  if (user.changed('first_name') && user.changed('last_name')) {
    user.first_name = user.first_name[0].toUpperCase() + user.first_name.slice(1);
    user.last_name = user.last_name[0].toUpperCase() + user.last_name.slice(1);
  }
}

const capitalizeFirstLetterOnModelUpdate = users => {
  if (users.attributes.first_name && users.attributes.last_name) {
    users.attributes.first_name = users.attributes.first_name[0].toUpperCase() + users.attributes.first_name.slice(1);
    users.attributes.last_name = users.attributes.last_name[0].toUpperCase() + users.attributes.first_name.slice(1);
  }
}

User.beforeCreate(capitalizeFirstLetter);
User.beforeBulkUpdate(capitalizeFirstLetterOnModelUpdate);   // Model.update
User.beforeCreate(setSaltAndPassword);
User.beforeUpdate(setSaltAndPassword);  // Used when instance.update