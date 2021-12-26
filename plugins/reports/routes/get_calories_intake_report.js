'use strict';

module.exports = {
  method: 'GET',
  path: '/api/report/calories-intake/{patient_id}',
  options: {
    tags: ['api'],
    description: 'Generates calories intake report',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/get_calories_intake_report')
  },
  handler: require('../handlers/get_calories_intake_report')
};
