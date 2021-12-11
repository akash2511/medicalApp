'use strict';

const SurveyQuestionModel = require('../schemas/survey_question');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { params, payload } = request;
  try {
    const filter = { _id: params.id, archive: false };
    const options = { useFindAndModify: false, new: true };
    const surveyquestion = await SurveyQuestionModel.findOneAndUpdate(filter, payload, options);

    return {
      statusCode: 201,
      message: `Survey question edited successfully`,
      data: surveyquestion
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};