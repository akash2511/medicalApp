'use strict';

module.exports = {
  method: 'DELETE',
  path: '/api/patient-self-management-record/{date}',
  options: {
    tags: ['api'],
    description: 'Deletes a self management record',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/delete_patient_self_management_record')
  },
  handler: require('../handlers/delete_patient_self_management_record')
};