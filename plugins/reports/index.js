'use strict';

exports.plugin = {
  name: 'reports',
  version: '1.0.0',
  register: (server, options) => {
    // routes
    server.route(require('./routes/get_covid_report'));
    server.route(require('./routes/get_sleep_report'));
    server.route(require('./routes/get_calories_intake_report'));
    server.route(require('./routes/get_calories_burnt_report'));
  }
};
