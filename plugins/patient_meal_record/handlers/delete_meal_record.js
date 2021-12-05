'use strict';

const MealRecordModel = require('../schemas/patient_meal_record');
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
    const record = await MealRecordModel.findOneAndUpdate(filter, update, options);
    return {
      statusCode: 204,
      message: `Patient meal record deleted successfully`
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
