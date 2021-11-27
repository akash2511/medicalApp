'use strict';

module.exports = {
  method: 'GET',
  path: '/api/vitamins&supplements',
  config: {
    tags: ['api'],
    description: 'Fetches vitamins and supplements',
    notes: 'Fetches vitamins and supplements'
  },
  handler: require('../handlers/get_all_vitamins_and_supplements')
};
