'use strict';

module.exports = {
  method: 'POST',
  path: '/api/exercise',
  options: {
    tags: ['api'],
    description: 'Add exercise',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin']
      }
    },
    validate: require('../validations/add_exercise')
  },
  handler: require('../handlers/add_exercise')
};
