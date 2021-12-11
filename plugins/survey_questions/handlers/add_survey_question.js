'use strict';

const SurveyQuestionModel = require('../schemas/survey_question');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { payload } = request;
  try {
    const surveyquestion = await SurveyQuestionModel.create(payload);

    return {
      statusCode: 201,
      message: `Survey question added successfully`,
      data: surveyquestion
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
