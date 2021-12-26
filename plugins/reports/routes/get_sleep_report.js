'use strict';

module.exports = {
  method: 'GET',
  path: '/api/sleep/report/{patient_id}',
  options: {
    tags: ['api'],
    description: 'Generates sleep report',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/get_sleep_report')
  },
  handler: require('../handlers/get_sleep_report')
};
