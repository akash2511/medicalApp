'use strict';

module.exports = {
  method: 'POST',
  path: '/api/survey-submission',
  options: {
    tags: ['api'],
    description: 'Adds a survey submission',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/add_survey_submisssion')
  },
  handler: require('../handlers/add_survey_submisssion')
};
