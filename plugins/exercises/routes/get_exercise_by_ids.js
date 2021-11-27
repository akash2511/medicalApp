'use strict';

module.exports = {
  method: 'GET',
  path: '/api/exercise/ids',
  options: {
    tags: ['api'],
    description: 'Fetch exercise by id',
    auth: false,
    validate: require('../validations/get_exercise_by_ids')
  },
  handler: require('../handlers/get_exercise_by_ids')
};
