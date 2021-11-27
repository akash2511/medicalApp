'use strict';

module.exports = {
  method: 'GET',
  path: '/api/self_management/ids',
  options: {
    tags: ['api'],
    description: 'Get self management by ids',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/get_self_management_by_ids')
  },
  handler: require('../handlers/get_self_management_by_ids')
};
