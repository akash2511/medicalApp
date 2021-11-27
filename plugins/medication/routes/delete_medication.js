'use strict';

module.exports = {
  method: 'DELETE',
  path: '/api/medication/{id}',
  options: {
    tags: ['api'],
    description: 'Delete medication by id',
    auth: false,
    validate: require('../validations/delete_medication')
  },
  handler: require('../handlers/delete_medication')
};

