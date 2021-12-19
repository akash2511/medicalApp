'use strict';

module.exports = {
  method: 'POST',
  path: '/api/csv',
  config: {
    tags: ['api'],
    description: 'Adds diet by csv',
    notes: 'Adds diet by csv',
    validate: require('../validations/add_diet_csv')
  },
  handler: require('../handlers/add_diet_csv')
};
