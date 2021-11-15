'use strict';

module.exports = {
  method: 'DELETE',
  path: '/api/diet/{dietId}',
  config: {
    tags: ['api'],
    description: 'Delete a diet',
    notes: 'Delete a diet',
    validate: require('../validations/delete_diet')
  },
  handler: require('../handlers/delete_diet')
};
