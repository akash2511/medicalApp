'use strict';

module.exports = {
  method: 'PUT',
  path: '/api/vitamins&supplements/{vitainSupplementId}',
  config: {
    tags: ['api'],
    description: 'Edits vitamins and supplements',
    notes: 'Edits vitamins and supplements',
    validate: require('../validations/edit_vitamins_and_supplements')
  },
  handler: require('../handlers/edit_vitamins_and_supplements')
};
