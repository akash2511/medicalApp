'use strict';

exports.plugin = {
  name: 'diet',
  version: '1.0.0',
  register: (server, options) => {
    // routes
    server.route(require('./routes/add_diet'));
    server.route(require('./routes/delete_diet'));
    server.route(require('./routes/edit_diet'));
    server.route(require('./routes/get_diet'));
  }
};
