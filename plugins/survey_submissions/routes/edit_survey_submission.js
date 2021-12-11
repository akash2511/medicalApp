'use strict';

module.exports = {
  method: 'PUT',
  path: '/api/survey-submission/{id}',
  options: {
    tags: ['api'],
    description: 'Edits a survey submission',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/edit_survey_submission')
  },
  handler: require('../handlers/edit_survey_submission')
};
