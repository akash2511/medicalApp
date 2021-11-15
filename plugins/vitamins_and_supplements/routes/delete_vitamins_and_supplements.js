'use strict';

module.exports = {
  method: 'DELETE',
  path: '/api/vitamins&supplements/{vitainSupplementId}',
  config: {
    tags: ['api'],
    description: 'Delete vitamins and supplements',
    notes: 'Delete vitamins and supplements',
    validate: require('../validations/delete_vitamins_and_supplements')
  },
  handler: require('../handlers/delete_vitamins_and_supplements')
};
