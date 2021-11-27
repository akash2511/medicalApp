'use strict';

module.exports = {
  method: 'GET',
  path: '/api/profile/ids',
  options: {
    tags: ['api'],
    description: 'Fetch a profile',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin']
      }
    },
    validate: require('../validations/get_profile_by_ids')
  },
  handler: require('../handlers/get_profile_by_ids')
};
