'use strict';

module.exports = {
  method: 'POST',
  path: '/api/survey-question',
  options: {
    tags: ['api'],
    description: 'Adds a survey question',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/add_survey_question')
  },
  handler: require('../handlers/add_survey_question')
};
