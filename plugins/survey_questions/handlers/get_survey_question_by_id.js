'use strict';

const SurveyQuestionModel = require('../schemas/survey_question');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { params } = request;
  try {
    const filter = { _id: params.id, archive: false };
    const surveyquestion = await SurveyQuestionModel.findOne(filter);

    return {
      statusCode: 200,
      message: `Survey question fetched successfully`,
      data: surveyquestion
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};