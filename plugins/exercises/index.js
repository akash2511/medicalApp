'use strict';

exports.plugin = {
  name: 'exercises',
  version: '1.0.0',
  register: (server, options) => {
    // routes
    server.route(require('./routes/add_exercise'));
    server.route(require('./routes/delete_exercise'));
    server.route(require('./routes/edit_exercise'));
    server.route(require('./routes/get_all_exercises'));
    server.route(require('./routes/get_exercise_by_ids'));
    // methods
    server.method(require('./methods/check_exercise'));
  }
};
