'use strict';

const SurveyQuestionModel = require('../schemas/survey_question');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { params, payload } = request;
  try {
    const filter = { _id: params.id };
    const update = { archive: true}
    const options = { useFindAndModify: false };
    const surveyquestion = await SurveyQuestionModel.findOneAndUpdate(filter, update, options);

    return {
      statusCode: 204,
      message: `Survey question deleted successfully`
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};