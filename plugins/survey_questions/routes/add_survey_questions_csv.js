'use strict';

module.exports = {
  method: 'POST',
  path: '/api/survey-question/csv',
  options: {
    tags: ['api'],
    description: 'Adds survey questions by csv',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/add_survey_questions_csv')
  },
  handler: require('../handlers/add_survey_questions_csv')
};
