'use strict';

module.exports = {
  method: 'GET',
  path: '/api/profile/patients',
  options: {
    tags: ['api'],
    description: 'Fetch patients using doctor id from credentials',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin','user']
      }
    }
  },
  handler: require('../handlers/get_profiles_by_doctor_id')
};
