'use strict';

module.exports = {
  method: 'POST',
  path: '/api/patient-meal-record',
  options: {
    tags: ['api'],
    description: 'Adds a patient meal record',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/add_patient_meal_record')
  },
  handler: require('../handlers/add_patient_meal_record')
};