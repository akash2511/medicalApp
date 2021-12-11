'use strict';

const SurveySubmissionModel = require('../schemas/survey_submission');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { params, server } = request;
  const { profile_id, survey_id } = params;
  try {
    const survey_questions = await server.methods.get_survey_questions_by_survey_id(survey_id);
    const question_ids = survey_questions.map(question => question._id);
    const filter = { profile_id, question_id: { $in: question_ids}, archive: false };
    const surveySubmissions = await SurveySubmissionModel.find(filter);

    return {
      statusCode: 201,
      message: `Survey submissions fetched successfully`,
      data: {survey_questions, surveySubmissions}
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
