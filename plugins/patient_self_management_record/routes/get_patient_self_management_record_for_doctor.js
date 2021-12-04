'use strict';

module.exports = {
  method: 'GET',
  path: '/api/patient-self-management-record/patient/{patient_id}/date/{date}',
  options: {
    tags: ['api'],
    description: 'Fetches a patient self management record for a doctor',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/get_patient_self_management_record_for_doctor')
  },
  handler: require('../handlers/get_patient_self_management_record_for_doctor')
};