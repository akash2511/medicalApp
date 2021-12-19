'use strict';

const csv_to_json = require('../../../utils/csv_to_json');
const SurveyQuestionModel = require('../schemas/survey_question');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { payload } = request;
  try {
    const csv_data = await csv_to_json(payload.path)
    const surveyquestions = await SurveyQuestionModel.create(csv_data);

    return {
      statusCode: 201,
      message: `Survey questions added successfully`,
      data: surveyquestion
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
