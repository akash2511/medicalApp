'use strict';

module.exports = {
  method: 'GET',
  path: '/api/self_management',
  options: {
    tags: ['api'],
    description: 'Get all self management',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    }
  },
  handler: require('../handlers/get_all_self_management')
};
