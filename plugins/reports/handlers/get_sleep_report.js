'use strict';
const Boom = require('@hapi/boom');
const moment = require('moment');

module.exports = async (request, h) => {
  const { params, server } = request;
  const {patient_id} = params;
  try {
    const self_management_records = server.methods.get_patients_self_management_records(patient_id);
    const self_management_records_filtered = self_management_records.slice(-10);
    let graph_object = {};
    self_management_records_filtered.forEach(sm_record => {
      graph_object[`${moment(submission.timestamps.createdAt).format('YYYY/MM/DD')}`] = {sleep_in_min: sm_record.sleep_in_min};
    })
    return {
      statusCode: 201,
      message: `Sleep report generated successfully`,
      data: graph_object
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
