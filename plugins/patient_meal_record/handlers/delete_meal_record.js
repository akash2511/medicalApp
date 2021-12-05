'use strict';

const MealRecordModel = require('../schemas/patient_meal_record');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { params } = request;
  try {
    const filter = { _id: params.id };
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
