'use strict';

const SurveySubmissionModel = require('../schemas/survey_submission');
const Boom = require('@hapi/boom');
const moment = require('moment');
const _ = require('underscore');

module.exports = async (request, h) => {
  const { params, server } = request;
  const { profile_id, survey_id } = params;
  try {
    const survey_questions = await server.methods.get_survey_questions_by_survey_id(survey_id);
    const question_ids = survey_questions.map(question => question._id);
    const filter = { profile_id, question_id: { $in: question_ids}, archive: false };
    const surveySubmissions = await SurveySubmissionModel.find(filter);
    const submissionByDate = surveySubmissions.length > 0? _.groupBy(surveySubmissions.map(item=>{
        return Object.assign({},item,{
          submittedDate: moment(item.created_at).format("YYYY-MM-DD")
        })
      }), (x) => x.submittedDate) : {};
    const lastDate = _.isEmpty(submissionByDate) ? [] : Object.keys(submissionByDate).sort((a,b)=> b.created_at - a.created_at)[0];
    const lastSubmissions =  submissionByDate[lastDate];
    return {
      statusCode: 201,
      message: `Survey submissions fetched successfully`,
      data: {survey_questions, lastSubmissions}
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
