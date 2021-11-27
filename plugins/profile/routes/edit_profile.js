'use strict';

module.exports = {
  method: 'PUT',
  path: '/api/profile/{id}',
  options: {
    tags: ['api'],
    description: 'Edit profile',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/edit_profile')
  },
  handler: require('../handlers/edit_profile')
};
