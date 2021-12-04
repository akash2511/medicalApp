'use strict';

const SelfManagementRecordModel = require('../schemas/patient_self_management_record');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { payload, auth: {credentials} } = request;
  try {
    const date = new Date(payload.date)
    const filter = {patient_id: credentials.profile_id, date: date};
    const update = { 
        archive: true
    }
    const options = { useFindAndModify: false};
    const record = await SelfManagementRecordModel.findOneAndUpdate(filter, update, options);
    return {
      statusCode: 204,
      message: `Patient self management record deleted successfully`
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
