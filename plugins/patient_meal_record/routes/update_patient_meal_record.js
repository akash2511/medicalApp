'use strict';

module.exports = {
  method: 'PUT',
  path: '/api/patient-meal-record/{id}',
  options: {
    tags: ['api'],
    description: 'Updates a patient meal record',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/update_patient_meal_record')
  },
  handler: require('../handlers/update_patient_meal_record')
};