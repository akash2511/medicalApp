'use strict';

const MealRecordModel = require('../schemas/patient_meal_record');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { params, payload } = request;

  try {
    const filter = {_id: params.id, archive: false};
    const options = { useFindAndModify: false, new: true};
    const record = await MealRecordModel.findOneAndUpdate(filter, payload, options);
    return {
      statusCode: 200,
      message: `Patient meal record updated successfully`,
      data: record
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
