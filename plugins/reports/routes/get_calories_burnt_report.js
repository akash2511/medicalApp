'use strict';

module.exports = {
  method: 'GET',
  path: '/api/calories-burnt/report/{patient_id}',
  options: {
    tags: ['api'],
    description: 'Generates calories burnt report',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/get_calories_burnt_report')
  },
  handler: require('../handlers/get_calories_burnt_report')
};
