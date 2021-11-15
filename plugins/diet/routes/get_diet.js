'use strict';

module.exports = {
  method: 'GET',
  path: '/api/diet/{dietId}',
  config: {
    tags: ['api'],
    description: 'Fetches a diet',
    notes: 'Fetches a diet',
    validate: require('../validations/get_diet')
  },
  handler: require('../handlers/get_diet')
};
