'use strict';

module.exports = {
  method: 'GET',
  path: '/api/patients-medication',
  options: {
    tags: ['api'],
    description: 'Fetch all medication',
    auth: false
  },
  handler: require('../handlers/get_all_medication')
};
