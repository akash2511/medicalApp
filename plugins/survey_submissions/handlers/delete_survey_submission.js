'use strict';

const SurveySubmissionModel = require('../schemas/survey_submission');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { params, auth: { credentials } } = request;
  const { profile_id } = credentials;
  try {
    const filter = { _id: params.id, profile_id };
    const update = { archive: true }
    const options = { useFindAndModify: false};
    const surveySubmission = await SurveySubmissionModel.findOneAndUpdate(filter, update, options);

    return {
      statusCode: 204,
      message: `Survey submission deleted successfully`
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
