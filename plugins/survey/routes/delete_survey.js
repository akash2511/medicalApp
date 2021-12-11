'use strict';

module.exports = {
  method: 'DELETE',
  path: '/api/survey/{id}',
  options: {
    tags: ['api'],
    description: 'Deletes a survey',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/delete_survey')
  },
  handler: require('../handlers/delete_survey')
};
