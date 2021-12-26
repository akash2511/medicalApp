'use strict';

module.exports = {
  method: 'PUT',
  path: '/api/patients-medication/{id}',
  options: {
    tags: ['api'],
    description: 'Edit medication by id',
    auth: false,
    validate: require('../validations/edit_patients_medication')
  },
  handler: require('../handlers/edit_patients_medication')
};
