'use strict';

module.exports = {
  method: 'GET',
  path: '/api/diet_plan/ids',
  options: {
    tags: ['api'],
    description: 'Get diet plan by ids',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    }
  },
  handler: require('../handlers/get_all_diet_plans')
};
