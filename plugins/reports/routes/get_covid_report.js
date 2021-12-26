'use strict';

module.exports = {
  method: 'GET',
  path: '/api/covid/report/{patient_id}',
  options: {
    tags: ['api'],
    description: 'Generates covid report',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/get_covid_report')
  },
  handler: require('../handlers/get_covid_report')
};
