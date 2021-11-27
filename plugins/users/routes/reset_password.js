'use strict';

module.exports = {
  method: 'POST',
  path: '/api/user/reset-password',
  options: {
    tags: ['api'],
    description: 'Reset password',
    auth: 'jwt',
    validate: require('../validations/reset_password')
  },
  handler: require('../handlers/reset_password')
};
