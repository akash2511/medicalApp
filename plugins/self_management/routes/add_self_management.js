'use strict';

module.exports = {
  method: 'POST',
  path: '/api/self_management',
  options: {
    tags: ['api'],
    description: 'Add self management',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/add_self_management')
  },
  handler: require('../handlers/add_self_management')
};
