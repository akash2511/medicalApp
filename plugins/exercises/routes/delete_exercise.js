'use strict';

module.exports = {
  method: 'DELETE',
  path: '/api/exercise/{id}',
  options: {
    tags: ['api'],
    description: 'Delete exercise',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin']
      }
    },
    validate: require('../validations/delete_exercise')
  },
  handler: require('../handlers/delete_exercise')
};
