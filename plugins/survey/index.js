'use strict';

exports.plugin = {
  name: 'survey',
  version: '1.0.0',
  register: (server, options) => {
    // routes
    server.route(require('./routes/add_survey'));
    server.route(require('./routes/delete_survey'));
    server.route(require('./routes/edit_survey'));
    server.route(require('./routes/get_survey_by_id'));
    server.route(require('./routes/get_all_surveys'));
  }
};
