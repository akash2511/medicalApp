'use strict';

module.exports = {
  method: 'POST',
  path: '/api/prescription',
  options: {
    tags: ['api'],
    description: 'Adds a prescription',
    auth: false,
    validate: require('../validations/add_prescription')
  },
  handler: require('../handlers/add_prescription')
};