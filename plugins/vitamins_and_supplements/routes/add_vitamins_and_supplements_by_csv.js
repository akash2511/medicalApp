'use strict';

module.exports = {
  method: 'POST',
  path: '/api/vitamins&supplements/csv',
  config: {
    tags: ['api'],
    description: 'Adds bulk vitamins and supplements through csv',
    notes: 'Adds bulk vitamins and supplements through csv',
    validate: require('../validations/add_vitamins_and_supplements_by_csv')
  },
  handler: require('../handlers/add_vitamins_and_supplements_by_csv')
};
