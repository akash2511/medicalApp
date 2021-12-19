'use strict';

module.exports = {
  method: 'PUT',
  path: '/api/survey-submissions',
  options: {
    tags: ['api'],
    description: 'Edits survey submissions',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/edit_survey_submissions')
  },
  handler: require('../handlers/edit_survey_submissions')
};
