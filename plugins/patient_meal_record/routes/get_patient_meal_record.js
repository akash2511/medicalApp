'use strict';

module.exports = {
  method: 'GET',
  path: '/api/patient-meal-record/{date}',
  options: {
    tags: ['api'],
    description: 'Fetches a patient meal record',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/get_patient_meal_record')
  },
  handler: require('../handlers/get_patient_meal_record')
};