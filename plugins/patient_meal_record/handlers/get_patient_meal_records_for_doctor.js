'use strict';

const MealRecordModel = require('../schemas/patient_meal_record');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { params } = request;
  try {
    const date = new Date(params.date)
    const filter = {patient_id: params.patient_id, date, archive: false};
    const record = await MealRecordModel.findOne(filter);
    return {
      statusCode: 200,
      message: `Patient meal record fetched successfully`,
      data: record
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
