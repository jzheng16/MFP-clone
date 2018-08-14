const Sequelize = require('sequelize');
const db = require('../');

const Verification = db.define('verification', { verificationId: { type: Sequelize.STRING } });

module.exports = Verification;
