'use strict';

module.exports = {
  method: 'PATCH',
  path: '/api/user/changepassword',
  options: {
    tags: ['api'],
    description: 'Change password',
    auth: 'jwt',
    validate: require('../validations/change_password')
  },
  handler: require('../handlers/change_password')
};
