'use strict';

module.exports = {
  method: 'GET',
  path: '/api/survey-question/survey/{survey_id}',
  options: {
    tags: ['api'],
    description: 'Fetches survey questions by survey id',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/get_survey_question_by_survey_id')
  },
  handler: require('../handlers/get_survey_questions_by_survey_id')
};
