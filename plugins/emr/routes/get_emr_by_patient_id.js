'use strict';

module.exports = {
  method: 'GET',
  path: '/api/emr/patient/{patientId}',
  options: {
    tags: ['api'],
    description: 'Get emr by patient id',
    auth: 'jwt',
    plugins: {
      hapiAuthorization: {
        roles: ['superAdmin', 'user']
      }
    },
    validate: require('../validations/get_emr_by_patient_id')
  },
  handler: require('../handlers/get_emr_by_patient_id')
};
