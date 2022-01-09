'use strict';

const Boom = require('@hapi/boom');
const moment = require('moment');
const getByField = require('../../../utils/get_by_field');

module.exports = async (request, h) => {
  const { params, server } = request;
  const {patient_id} = params;
  try {
    const covid_surveys = await server.methods.get_survey_by_type('covid');
    let pre_covid_survey = {};
    let post_covid_survey = {};
    const survey_ids = []
    covid_surveys.forEach(survey => {
      if(survey.name === 'precovid') pre_covid_survey = survey;
      else if(survey.name === 'postcovid') post_covid_survey = survey;
      survey_ids.push(survey._id.toString())
    });
    const covid_questions = await server.methods.get_survey_questions_by_survey_ids(survey_ids);
    const covid_question_ids = [];
    let survey_question_answers_by_id = {};
    covid_questions.forEach(question => {
      if(question.type === 'SCALE'){
        question.answers.forEach(answer => {
          Object.assign(survey_question_answers_by_id, {[`${question._id}_${answer._id}`]: answer});
        })
        covid_question_ids.push(question._id);
      }
    })
    const survey_submissions = await server.methods.get_survey_submissions_by_profile_and_question_ids(patient_id, covid_question_ids);
    const survey_submission_by_id = getByField({data: survey_submissions, field: 'question_id'});
    if(survey_submissions.length < 1) throw new Error('Survey not submitted');
    let graph_object = {};
    covid_questions.forEach(question => {
      const submission = survey_submission_by_id[question._id.toString()];
      if(submission) {
        if(!graph_object[`${moment(submission.createdAt).format('YYYY/MM/DD')}`]){
          graph_object[`${moment(submission.createdAt).format('YYYY/MM/DD')}`] = {}
        }
        if(question.type === 'SCALE') {
          graph_object[`${moment(submission.createdAt).format('YYYY/MM/DD')}`][question.score_category] = parseInt(survey_question_answers_by_id[`${question._id}_${submission.answers[0]}`]['title']);
        }
      };
    })
    return {
      statusCode: 201,
      message: `Covid report generated successfully`,
      data: graph_object
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
