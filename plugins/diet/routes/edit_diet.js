'use strict';

module.exports = {
  method: 'PUT',
  path: '/api/diet/{dietId}',
  config: {
    tags: ['api'],
    description: 'Edits a diet',
    notes: 'Edits a diet',
    validate: require('../validations/edit_diet')
  },
  handler: require('../handlers/edit_diet')
};
