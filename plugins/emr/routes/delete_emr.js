'use strict';

module.exports = {
  method: 'DELETE',
  path: '/api/emr/{id}',
  options: {
    tags: ['api'],
    description: 'Delete emr by id',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/delete_emr')
  },
  handler: require('../handlers/delete_emr')
};
