'use strict';

module.exports = {
  method: 'DELETE',
  path: '/api/user/logout',
  options: {
    tags: ['api'],
    description: 'for logout',
    auth: 'jwt'
  },
  handler: require('../handlers/user_logout')
};
