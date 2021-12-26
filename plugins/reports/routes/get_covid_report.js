'use strict';

module.exports = {
  method: 'GET',
  path: '/api/covid/report/{patient_id}',
  options: {
    tags: ['api'],
    description: 'Fetches a survey',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/get_survey_by_id')
  },
  handler: require('../handlers/get_survey_by_id')
};
