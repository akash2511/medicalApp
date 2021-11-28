'use strict';

exports.plugin = {
  name: 'self_management',
  version: '1.0.0',
  register: (server, options) => {
    // routes
    server.route(require('./routes/add_self_management'));
    server.route(require('./routes/get_all_self_management'));
    server.route(require('./routes/get_self_management_by_ids'));
    // methods
    server.method(require('./methods/check_self_management'));
  }
};
