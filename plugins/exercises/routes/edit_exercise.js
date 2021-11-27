'use strict';

module.exports = {
  method: 'PUT',
  path: '/api/exercise/{id}',
  options: {
    tags: ['api'],
    description: 'Edit exercise',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin']
      }
    },
    validate: require('../validations/edit_exercise')
  },
  handler: require('../handlers/edit_exercise')
};
