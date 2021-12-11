'use strict';

const SurveySubmissionModel = require('../schemas/survey_submission');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { params } = request;
  const { profile_id, question_id } = params;
  try {
    const filter = { profile_id, question_id, archive: false };
    const surveySubmissions = await SurveySubmissionModel.find(filter);

    return {
      statusCode: 201,
      message: `Survey submissions fetched successfully`,
      data: surveySubmissions
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
