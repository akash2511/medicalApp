'use strict';

exports.plugin = {
  name: 'profile',
  version: '1.0.0',
  register: (server, options) => {
    // routes
    server.route(require('./routes/add_profile'));
    server.route(require('./routes/delete_profile'));
    server.route(require('./routes/edit_profile'));
    server.route(require('./routes/get_all_profiles'));
    server.route(require('./routes/get_profile_by_ids'));
    server.route(require('./routes/get_profiles_by_doctor_id'));
  }
};
