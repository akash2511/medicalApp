'use strict';

module.exports = {
  method: 'POST',
  path: '/api/user/login',
  options: {
    tags: ['api'],
    description: 'Login an user',
    auth: false,
    validate: require('../validations/user_login')
  },
  handler: require('../handlers/user_login')
};
