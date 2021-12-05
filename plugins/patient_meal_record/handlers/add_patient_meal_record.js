'use strict';

const MealRecordModel = require('../schemas/patient_meal_record');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { payload, auth: {credentials} } = request;
  try {
    patient_id = credentials.profile_id
    create_object = Object.assign({}, payload, {date: new Date(payload.date), patient_id})
    const record = await MealRecordModel.create(create_object);
    return {
      statusCode: 201,
      message: `Patient meal record created successfully`,
      data: record
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
