'use strict';

exports.plugin = {
  name: 'survey_submissions',
  version: '1.0.0',
  register: (server, options) => {
    // routes
    server.route(require('./routes/add_survey_submisssion'));
    server.route(require('./routes/add_survey_submisssions'));
    server.route(require('./routes/delete_survey_submission'));
    server.route(require('./routes/edit_survey_submission'));
    server.route(require('./routes/edit_survey_submissions'));
    server.route(require('./routes/get_survey_reports'));
    server.route(require('./routes/get_survey_submission_profileId_and_questionId'));

    // methods
    server.method(require('./methods/get_survey_submissions_by_profile_and_question_ids'));
  }
};
