'use strict';

const SurveyQuestionModel = require('../schemas/survey_question');

module.exports = {
  name: 'get_survey_questions_by_survey_id',
  method: async (survey_id) => {
    try {
      const filter = {
        survey_id,
        archive: false
      };
      const surveyquestions = await SurveyQuestionModel.find(filter);
      return surveyquestions;
    } catch (e) {
      throw e;
    }
  }
};