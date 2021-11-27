'use strict';

exports.plugin = {
  name: 'user',
  version: '1.0.0',
  register: (server, options) => {
    // routes
    server.route(require('./routes/add_user'));
    server.route(require('./routes/user_login'));
    server.route(require('./routes/edit_user_by_id'));
    server.route(require('./routes/change_password'));
    server.route(require('./routes/user_logout'));
    server.route(require('./routes/reset_password'));
  }
};
