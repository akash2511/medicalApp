'use strict';

const Boom = require('@hapi/boom');
const SurveySubmissionModel = require('../schemas/survey_submission');
const get_by_field = require('../../../utils/get_by_field')

module.exports = async (request, h) => {
  const { payload, auth: { credentials } } = request;
  const { profile_id } = credentials;
  try {
    const submission_by_id = get_by_field({data: payload});
    const submission_ids = Object.keys(submission_by_id);
    const filter = { _id: { $in: submission_ids}, profile_id, archive: false };
    const surveySubmissions = await SurveySubmissionModel.find(filter);
    const update_obj = surveySubmissions.map(submission => Object.assign(submission, submission_by_id[submission._id]));
    const updated_submissions = await SurveySubmissionModel.create(update_obj);

    return {
      statusCode: 201,
      message: `Survey submissions updated successfully`,
      data: updated_submissions
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
