'use strict';

module.exports = {
  method: 'GET',
  path: '/api/survey',
  options: {
    tags: ['api'],
    description: 'Fetches all survey',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    }
  },
  handler: require('../handlers/get_all_surveys')
};
