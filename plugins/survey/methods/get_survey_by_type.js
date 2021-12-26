'use strict';

const SurveyModel = require('../schemas/survey');

module.exports = {
  name: 'get_survey_by_type',
  method: async (type) => {
    try {
      const filter = {
        type,
        archive: false
      };
      const survey = await SurveyModel.find(filter);
      return survey;
    } catch (e) {
      throw e;
    }
  }
};
