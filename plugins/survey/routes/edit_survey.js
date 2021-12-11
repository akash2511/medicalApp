'use strict';

module.exports = {
  method: 'PUT',
  path: '/api/survey/{id}',
  options: {
    tags: ['api'],
    description: 'Edits a survey',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/edit_survey')
  },
  handler: require('../handlers/edit_survey')
};
