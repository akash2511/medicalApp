'use strict';

module.exports = {
  method: 'POST',
  path: '/api/user',
  options: {
    tags: ['api'],
    description: 'Add Users',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/add_user')
  },
  handler: require('../handlers/add_user')
};
