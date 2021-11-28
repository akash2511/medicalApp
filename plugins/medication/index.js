'use strict';

exports.plugin = {
  name: 'medication',
  version: '1.0.0',
  register: (server, options) => {
    // routes
    server.route(require('./routes/add_medication'));
    server.route(require('./routes/add_medication_by_csv'));
    server.route(require('./routes/delete_medication'));
    server.route(require('./routes/edit_medication'));
    server.route(require('./routes/get_all_medication'));
    server.route(require('./routes/get_medication_by_ids'));
    // methods
    server.method(require('./methods/check_medication'));
  }
};
