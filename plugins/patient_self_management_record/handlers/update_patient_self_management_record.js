'use strict';

const SelfManagementRecordModel = require('../schemas/patient_self_management_record');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { params, payload } = request;
  const { exercise, sleep_in_min } = payload;
  try {
    const filter = {_id: params.id, archive: false};
    const update = { 
        $push: { exercise: { $each: exercise}},
        $set: {sleep_in_min}
    }
    const options = { useFindAndModify: false, new: true};
    const record = await MealRecordModel.findOneAndUpdate(filter, update, options);
    return {
      statusCode: 200,
      message: `Patient self management record created successfully`,
      data: record
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
