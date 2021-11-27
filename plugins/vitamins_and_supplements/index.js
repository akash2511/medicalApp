'use strict';

exports.plugin = {
  name: 'vitamins_and_supplements',
  version: '1.0.0',
  register: (server, options) => {
    // routes
    server.route(require('./routes/add_vitamins_and_supplements'));
    server.route(require('./routes/delete_vitamins_and_supplements'));
    server.route(require('./routes/edit_vitamins_and_supplements'));
    server.route(require('./routes/get_vitamins_and_supplements'));
    server.route(require('./routes/get_all_vitamins_and_supplements'));
  }
};
