'use strict';

module.exports = {
  method: 'POST',
  path: '/api/emr',
  options: {
    tags: ['api'],
    description: 'Adds emr',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/add_emr')
  },
  handler: require('../handlers/add_emr')
};
