'use strict';

const SurveySubmissionModel = require('../schemas/survey_submission');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { payload, auth: { credentials } } = request;
  const { profile_id } = credentials;
  try {
    const uploadObject = payload.map(submission => Object.assign({}, submission, {profile_id}))
    const surveySubmission = await SurveySubmissionModel.create(uploadObject);

    return {
      statusCode: 201,
      message: `Survey submissions added successfully`,
      data: surveySubmission
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
