'use strict';

exports.plugin = {
  name: 'prescription',
  version: '1.0.0',
  register: (server, options) => {
    // routes
    server.route(require('./routes/add_prescription'));
    server.route(require('./routes/delete_prescription'));
    server.route(require('./routes/get_prescription_by_ids'));
  }
};
