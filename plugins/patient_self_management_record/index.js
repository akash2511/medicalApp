'use strict';

exports.plugin = {
  name: 'patient_self_management_record',
  version: '1.0.0',
  register: (server, options) => {
    // routes
    server.route(require('./routes/add_patient_self_management_record'));
    server.route(require('./routes/delete_patient_self_management_record'));
    server.route(require('./routes/get_patient_self_management_record_for_doctor'));
    server.route(require('./routes/get_patient_self_management_record'));
    server.route(require('./routes/update_patient_self_management_record'));
  }
};
