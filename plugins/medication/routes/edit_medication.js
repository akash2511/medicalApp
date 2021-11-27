'use strict';

module.exports = {
  method: 'PUT',
  path: '/api/medication/{id}',
  options: {
    tags: ['api'],
    description: 'Edit medication by id',
    auth: false,
    validate: require('../validations/edit_medication')
  },
  handler: require('../handlers/edit_medication')
};
