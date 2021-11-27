'use strict';

const jwt = require('jsonwebtoken');
const secret = require('./config');

function createToken(user) {
  // Sign the JWT
  return jwt.sign(user, secret, {
    algorithm: 'HS256',
    expiresIn: '10d'
  });
}

module.exports = createToken;
