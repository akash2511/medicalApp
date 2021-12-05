'use strict';

module.exports = {
  method: 'GET',
  path: '/api/profile/me',
  options: {
    tags: ['api'],
    description: 'Fetches the profile using credentials',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin','user']
      }
    }
  },
  handler: require('../handlers/get_my_profile')
};
