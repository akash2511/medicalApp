'use strict';

exports.plugin = {
  name: 'patients_medication',
  version: '1.0.0',
  register: (server, options) => {
    // routes
    server.route(require('./routes/add_new_patients_medication'));
    server.route(require('./routes/delete_patients_medication'));
    server.route(require('./routes/edit_patients_medication'));
    server.route(require('./routes/get_all_medication'));
    server.route(require('./routes/get_patients_medication_by_ids'));
    // methods
    server.method(require('./methods/create_patients_medication'));
    server.method(require('./methods/check_patients_medication'));
  }
};
