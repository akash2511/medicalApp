'use strict';

exports.plugin = {
  name: 'patient_meal_record',
  version: '1.0.0',
  register: (server, options) => {
    // routes
    server.route(require('./routes/add_patient_meal_record'));
    server.route(require('./routes/delete_meal_record'));
    server.route(require('./routes/get_patient_meal_record'));
    server.route(require('./routes/get_patient_meal_records_for_doctor'));
    server.route(require('./routes/update_patient_meal_record'));
  }
};
