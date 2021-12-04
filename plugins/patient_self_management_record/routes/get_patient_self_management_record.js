'use strict';

module.exports = {
  method: 'GET',
  path: '/api/patient-self-management-record/{date}',
  options: {
    tags: ['api'],
    description: 'Fetches a patient self management record',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/get_patient_self_management_record')
  },
  handler: require('../handlers/get_patient_self_management_record')
};