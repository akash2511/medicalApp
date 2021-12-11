'use strict';

const SurveySubmissionModel = require('../schemas/survey_submission');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { params, payload, auth: { credentials } } = request;
  const { profile_id } = credentials;
  try {
    const filter = { _id: params.id, profile_id, archive: false };
    const options = { useFindAndModify: false, new: true };
    const surveySubmission = await SurveySubmissionModel.findOneAndUpdate(filter, payload, options);

    return {
      statusCode: 201,
      message: `Survey submission added successfully`,
      data: surveySubmission
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
