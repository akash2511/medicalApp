'use strict';

module.exports = {
  method: 'POST',
  path: '/api/vitamins&supplements',
  config: {
    tags: ['api'],
    description: 'Adds a vitamins and supplements',
    notes: 'Adds a vitamins and supplements',
    validate: require('../validations/add_vitamins_and_supplements')
  },
  handler: require('../handlers/add_vitamins_and_supplements')
};
