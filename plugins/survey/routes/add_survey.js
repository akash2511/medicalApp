'use strict';

module.exports = {
  method: 'POST',
  path: '/api/survey',
  options: {
    tags: ['api'],
    description: 'Adds a survey',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/add_survey')
  },
  handler: require('../handlers/add_survey')
};
