'use strict';

module.exports = {
  method: 'GET',
  path: '/api/survey-question/{id}',
  options: {
    tags: ['api'],
    description: 'Fetches a survey question',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/get_survey_question_by_id')
  },
  handler: require('../handlers/get_survey_question_by_id')
};
