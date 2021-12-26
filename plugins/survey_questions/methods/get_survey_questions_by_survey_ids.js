'use strict';

const SurveyQuestionModel = require('../schemas/survey_question');

module.exports = {
  name: 'get_survey_questions_by_survey_ids',
  method: async (survey_ids) => {
    try {
      const filter = {
        survey_id: { $in: survey_ids},
        archive: false
      };
      const surveyquestions = await SurveyQuestionModel.find(filter);
      return surveyquestions;
    } catch (e) {
      throw e;
    }
  }
};