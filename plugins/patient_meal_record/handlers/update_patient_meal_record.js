'use strict';

const MealRecordModel = require('../schemas/patient_meal_record');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { params, payload } = request;
  let { breakfast, lunch, snack, dinner, hydartion_in_litres} = payload;
  breakfast = breakfast ? breakfast: [];
  lunch = lunch ? lunch: [];
  snack = snack ? snack: [];
  dinner = dinner ? dinner: [];
  try {
    const filter = {_id: params.id, archive: false};
    const update = { 
      breakfast,
      lunch,
      snack,
      dinner,
      hydartion_in_litres
    }
    const options = { useFindAndModify: false, new: true};
    const record = await MealRecordModel.findOneAndUpdate(filter, update, options);
    return {
      statusCode: 200,
      message: `Patient meal record updated successfully`,
      data: record
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
