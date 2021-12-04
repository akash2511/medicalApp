'use strict';

module.exports = {
  method: 'POST',
  path: '/api/patient-self-management-record',
  options: {
    tags: ['api'],
    description: 'Adds a patient self management record',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/add_patient_self_management_record')
  },
  handler: require('../handlers/add_patient_self_management_record')
};