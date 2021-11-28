'use strict';

module.exports = {
  method: 'GET',
  path: '/api/diet/ids',
  config: {
    tags: ['api'],
    description: 'Fetches diet by ids',
    notes: 'Fetches diet by ids',
    validate: require('../validations/get_diet_by_ids')
  },
  handler: require('../handlers/get_diet_by_ids')
};
