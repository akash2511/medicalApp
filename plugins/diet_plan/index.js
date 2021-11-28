'use strict';

exports.plugin = {
  name: 'diet_plan',
  version: '1.0.0',
  register: (server, options) => {
    // routes
    server.route(require('./routes/add_diet_plan'));
    server.route(require('./routes/get_all_diet_plans'));
    server.route(require('./routes/get_diet_plan_by_ids'));
    // methods
    server.method(require('./methods/check_diet_plan'));
  }
};
