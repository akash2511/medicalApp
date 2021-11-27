'use strict';

module.exports = {
  method: 'GET',
  path: '/api/prescription/ids',
  options: {
    tags: ['api'],
    description: 'Fetch prescription by ids',
    auth: false,
    validate: require('../validations/get_prescription_by_ids')
  },
  handler: require('../handlers/get_prescription_by_ids')
};