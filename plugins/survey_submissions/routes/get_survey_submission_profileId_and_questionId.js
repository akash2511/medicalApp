'use strict';

module.exports = {
  method: 'GET',
  path: '/api/survey-submission/profile/{profile_id}/question/{question_id}',
  options: {
    tags: ['api'],
    description: 'Fetches a survey submission by profile id and question id',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/get_survey_submission_profileId_and_questionId')
  },
  handler: require('../handlers/get_survey_submission_profileId_and_questionId')
};
