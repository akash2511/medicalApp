'use strict';

module.exports = {
  method: 'POST',
  path: '/api/profile',
  options: {
    tags: ['api'],
    description: 'Add profile',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/add_profile')
  },
  handler: require('../handlers/add_profile')
};
