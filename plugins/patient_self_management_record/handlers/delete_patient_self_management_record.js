'use strict';

const SelfManagementRecordModel = require('../schemas/patient_self_management_record');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { params } = request;
  try {
    const filter = {_id: params.id};
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
