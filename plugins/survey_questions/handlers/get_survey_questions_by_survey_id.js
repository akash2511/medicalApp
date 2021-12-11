'use strict';

const SurveyQuestionModel = require('../schemas/survey_question');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { params } = request;
  try {
    const filter = { survey_id: params.survey_id, archive: false };
    const surveyquestions = await SurveyQuestionModel.find(filter);

    return {
      statusCode: 200,
      message: `Survey questions fetched successfully`,
      data: surveyquestions
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};