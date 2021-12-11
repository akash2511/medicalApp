'use strict';

module.exports = {
  method: 'DELETE',
  path: '/api/survey-question/{id}',
  options: {
    tags: ['api'],
    description: 'Deletes a survey question',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/delete_survey_question')
  },
  handler: require('../handlers/delete_survey_question')
};
