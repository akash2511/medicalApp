'use strict';

module.exports = {
  method: 'GET',
  path: '/api/survey-submission/profile/{profile_id}/survey/{survey_id}',
  options: {
    tags: ['api'],
    description: 'Fetches a survey report by profile id and survey id',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/get_survey_reports')
  },
  handler: require('../handlers/get_survey_reports')
};
