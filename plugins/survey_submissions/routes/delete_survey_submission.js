'use strict';

module.exports = {
  method: 'DELETE',
  path: '/api/survey-submission/{id}',
  options: {
    tags: ['api'],
    description: 'Deletes a survey submission',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/delete_survey_submission')
  },
  handler: require('../handlers/delete_survey_submission')
};
