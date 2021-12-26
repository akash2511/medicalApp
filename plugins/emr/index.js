'use strict';

exports.plugin = {
  name: 'emr',
  version: '1.0.0',
  register: (server, options) => {
    // routes
    server.route(require('./routes/add_emr'));
    server.route(require('./routes/get_emr_by_patient_id'));
    server.route(require('./routes/delete_emr'));
    // methods
    server.method(require('./methods/update_prescription_id_in_emr'));
    server.method(require('./methods/check_emr'));
  }
};
