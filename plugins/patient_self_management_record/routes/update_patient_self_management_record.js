'use strict';

module.exports = {
  method: 'PUT',
  path: '/api/patient-self-management-record/{id}',
  options: {
    tags: ['api'],
    description: 'Updates a patient self management record',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/update_patient_self_management_record')
  },
  handler: require('../handlers/update_patient_self_management_record')
};