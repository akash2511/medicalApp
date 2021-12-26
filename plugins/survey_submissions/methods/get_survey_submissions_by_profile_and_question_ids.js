'use strict';

const SurveySubmissionModel = require('../schemas/survey_submission');

module.exports = {
  name: 'get_survey_submissions_by_profile_and_question_ids',
  method: async (profile_id, question_ids) => {
    try {
      const filter = {
        profile_id,
        question_id: { $in: question_ids},
        archive: false
      };
      const survey_submission = await SurveySubmissionModel.find(filter);
      if(!survey_submission) throw new Error('Survey not taken')
      return survey_submission;
    } catch (e) {
      throw e;
    }
  }
};