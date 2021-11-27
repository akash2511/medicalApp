'use strict';

module.exports = {
  method: 'POST',
  path: '/api/medication/csv',
  options: {
    tags: ['api'],
    description: 'Add medication through csv',
    auth: false,
    validate: require('../validations/add_medication_by_csv')
  },
  handler: require('../handlers/add_medication_by_csv')
};

