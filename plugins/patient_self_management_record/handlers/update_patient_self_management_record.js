'use strict';

const SelfManagementRecordModel = require('../schemas/patient_self_management_record');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { payload, auth: {credentials} } = request;
  const { exercise, sleep_in_min } = payload;
  try {
    const date = new Date(payload.date)
    const filter = {patient_id: credentials.profile_id, date: date, archive: false};
    const update = { 
        $push: { exercise: { $each: exercise}},
        $inc: { sleep_in_min: sleep_in_min}
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
