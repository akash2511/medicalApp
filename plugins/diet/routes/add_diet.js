'use strict';

module.exports = {
  method: 'POST',
  path: '/api/diet',
  config: {
    tags: ['api'],
    description: 'Adds a diet',
    notes: 'Adds a diet',
    validate: require('../validations/add_diet')
  },
  handler: require('../handlers/add_diet')
};
