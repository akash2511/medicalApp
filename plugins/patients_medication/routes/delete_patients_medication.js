'use strict';

module.exports = {
  method: 'DELETE',
  path: '/api/patients-medication/{id}',
  options: {
    tags: ['api'],
    description: 'Delete medication by id',
    auth: false,
    validate: require('../validations/delete_patients_medication')
  },
  handler: require('../handlers/delete_patients_medication')
};

