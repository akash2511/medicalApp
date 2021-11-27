'use strict';

module.exports = {
  method: 'DELETE',
  path: '/api/prescription/{id}',
  options: {
    tags: ['api'],
    description: 'Deletes a prescription',
    auth: false,
    validate: require('../validations/delete_prescription')
  },
  handler: require('../handlers/delete_prescription')
};