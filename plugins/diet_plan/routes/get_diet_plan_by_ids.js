'use strict';

module.exports = {
  method: 'GET',
  path: '/api/diet_plan',
  options: {
    tags: ['api'],
    description: 'Get diet plan by ids',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/get_diet_plan_by_ids')
  },
  handler: require('../handlers/get_diet_plan_by_ids')
};
