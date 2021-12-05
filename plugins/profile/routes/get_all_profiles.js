'use strict';

module.exports = {
  method: 'GET',
  path: '/api/profile',
  options: {
    tags: ['api'],
    description: 'Fetch a profile',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
  },
  handler: require('../handlers/get_all_profiles')
};
