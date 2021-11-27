'use strict';

module.exports = {
  method: 'GET',
  path: '/api/vitamins&supplements/ids',
  config: {
    tags: ['api'],
    description: 'Fetches vitamins and supplements',
    notes: 'Fetches vitamins and supplements',
    validate: require('../validations/get_vitamins_and_supplements')
  },
  handler: require('../handlers/get_vitamins_and_supplements')
};
