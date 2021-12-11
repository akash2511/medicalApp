'use strict';

module.exports = {
  method: 'PUT',
  path: '/api/survey-question/{id}',
  options: {
    tags: ['api'],
    description: 'Edits a survey question',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/edit_survey_question')
  },
  handler: require('../handlers/edit_survey_question')
};
