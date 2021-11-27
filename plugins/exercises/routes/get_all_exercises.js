'use strict';

module.exports = {
  method: 'GET',
  path: '/api/exercises',
  options: {
    tags: ['api'],
    description: 'Fetch all exercise',
    auth: false
  },
  handler: require('../handlers/get_all_exercises')
};
