'use strict';

module.exports = {
  method: 'PATCH',
  path: '/api/user/{_id}',
  options: {
    tags: ['api'],
    description: 'Edit user',
    notes: 'Edit user',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin']
      }
    },
    validate: require('../validations/edit_user_by_id')
  },
  handler: require('../handlers/edit_user_by_id')
};
