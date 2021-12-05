'use strict';

module.exports = {
  method: 'DELETE',
  path: '/api/patient-meal-record/{id}',
  options: {
    tags: ['api'],
    description: 'Deletes a patient meal record',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/delete_meal_record')
  },
  handler: require('../handlers/delete_meal_record')
};