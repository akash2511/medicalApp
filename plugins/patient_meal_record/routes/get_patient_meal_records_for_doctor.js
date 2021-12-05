'use strict';

module.exports = {
  method: 'GET',
  path: '/api/patient-meal-record/patient/{patient_id}/date/{date}',
  options: {
    tags: ['api'],
    description: 'Fetches a patient meal record for a doctor',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/get_patient_meal_records_for_doctor')
  },
  handler: require('../handlers/get_patient_meal_records_for_doctor')
};