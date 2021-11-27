'use strict';

module.exports = {
  method: 'POST',
  path: '/api/medication',
  options: {
    tags: ['api'],
    description: 'Add a medication',
    auth: false,
    validate: require('../validations/add_medication')
  },
  handler: require('../handlers/add_medication')
};

