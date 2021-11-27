'use strict';

module.exports = {
  method: 'DELETE',
  path: '/api/profile/{id}',
  options: {
    tags: ['api'],
    description: 'Delete profile',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin']
      }
    },
    validate: require('../validations/delete_profile')
  },
  handler: require('../handlers/delete_profile')
};
