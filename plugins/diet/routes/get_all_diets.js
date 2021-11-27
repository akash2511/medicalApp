'use strict';

module.exports = {
  method: 'GET',
  path: '/api/diet',
  config: {
    tags: ['api'],
    description: 'Fetches all diet',
    notes: 'Fetches all diet'
  },
  handler: require('../handlers/get_all_diets')
};
