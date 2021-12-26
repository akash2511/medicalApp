'use strict';

const Boom = require('@hapi/boom');
const getByField = require('../../../utils/get_by_field');
const moment = require('moment');

module.exports = async (request, h) => {
  const { params, server } = request;
  const {patient_id} = params;
  try {
    const self_management_records = await server.methods.get_patients_self_management_records(patient_id);
    const self_management_records_filtered = self_management_records.slice(-10);
    const exercise_ids = [];
    let graph_object = {};
    self_management_records_filtered.forEach(sm_record => {
      graph_object[`${moment(sm_record.date).format('YYYY/MM/DD')}`] = { calories_burnt: 0};
      sm_record.exercise.forEach(activity => {
        exercise_ids.push(activity.id);
      })
    })
    const exercises = await server.methods.check_exercise(exercise_ids);
    const exercise_by_id = getByField({data: exercises});
    self_management_records_filtered.forEach(sm_record => {
      sm_record.exercise.forEach(activity => {
        graph_object[`${moment(sm_record.date).format('YYYY/MM/DD')}`]['calories_burnt'] += (activity.duration_in_min * exercise_by_id[activity.id]['calories_burnt']['value'])/exercise_by_id[activity.id]['calories_burnt']['duration_in_min'];
      })
    })
    
    return {
      statusCode: 201,
      message: `Calories burnt report generated successfully`,
      data: graph_object
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
