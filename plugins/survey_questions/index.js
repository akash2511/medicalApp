'use strict';

exports.plugin = {
  name: 'survey_questions',
  version: '1.0.0',
  register: (server, options) => {
    // routes
    server.route(require('./routes/add_survey_question'));
    server.route(require('./routes/add_survey_questions_csv'));
    server.route(require('./routes/delete_survey_question'));
    server.route(require('./routes/edit_survey_question'));
    server.route(require('./routes/get_survey_question_by_id'));
    server.route(require('./routes/get_survey_question_by_survey_id'));

    // methods
    server.method(require('./methods/get_survey_questions_by_survey_ids'));
  }
};
