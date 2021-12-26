'use strict';

const PrescriptionModel = require('../schemas/prescription');
const Boom = require('@hapi/boom');

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
      if(type === 'SCALE'){
        question.answers.forEach(answer => {
          Object.assign(survey_question_answers_by_id, {[`${question._id}_${question.score_category}_${answer._id}`]: answer});
        })
        covid_question_ids.push(question._id);
      }
    })
    const survey_submissions = await server.methods.get_survey_submissions_by_profile_and_question_ids(patient_id, covid_question_ids);
    const graph_object = {};
    survey_submissions.forEach(submission => {
      if(!graph_object[`${moment(submission.timestamps.createdAt).format('YYYY/MM/DD')}`]){
        graph_object[`${moment(submission.timestamps.createdAt).format('YYYY/MM/DD')}`] = {}
      }
      graph_object[`${moment(submission.timestamps.createdAt).format('YYYY/MM/DD')}`]
    })
    const prescription = await PrescriptionModel.find({_id: {$in: ids}, archive: false})
    return {
      statusCode: 201,
      message: `prescription fetched successfully`,
      data: prescription
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
