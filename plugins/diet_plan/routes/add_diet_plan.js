'use strict';

module.exports = {
  method: 'POST',
  path: '/api/diet_plan',
  options: {
    tags: ['api'],
    description: 'Add diet plan',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/add_diet_plan')
  },
  handler: require('../handlers/add_diet_plan')
};
