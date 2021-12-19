'use strict';

module.exports = {
  method: 'POST',
  path: '/api/survey-submissions',
  options: {
    tags: ['api'],
    description: 'Adds array of survey submission',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/add_survey_submisssions')
  },
  handler: require('../handlers/add_survey_submisssions')
};
