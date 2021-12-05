'use strict';

const SelfManagementRecordModel = require('../schemas/patient_self_management_record');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { params, auth: {credentials} } = request;
  try {
    const date = new Date(params.date)
    const filter = {patient_id: credentials.profile_id, date, archive: false};
    const record = await SelfManagementRecordModel.findOne(filter);
    return {
      statusCode: 200,
      message: `Patient self management record fetched successfully`,
      data: record
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
