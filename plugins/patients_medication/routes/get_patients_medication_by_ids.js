'use strict';

module.exports = {
  method: 'GET',
  path: '/api/patients-medication/ids',
  options: {
    tags: ['api'],
    description: 'Fetch medication by ids',
    auth: false,
    validate: require('../validations/get_patients_medication_by_ids')
  },
  handler: require('../handlers/get_patients_medication_by_ids')
};
