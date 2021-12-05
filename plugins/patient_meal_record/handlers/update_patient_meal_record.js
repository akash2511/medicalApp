'use strict';

const MealRecordModel = require('../schemas/patient_meal_record');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { payload, auth: {credentials} } = request;
  const { breakfast, lunch, snack, dinner, hydartion_in_litres} = payload;
  try {
    const date = new Date(payload.date)
    const filter = {patient_id: credentials.profile_id, date: date, archive: false};
    const update = { 
        $push: { 
            breakfast: { $each: breakfast},
            lunch: { $each: lunch},
            snack: { $each: snack},
            dinner: { $each: dinner},
        },
        $inc: { hydartion_in_litres: hydartion_in_litres}
    }
    const options = { useFindAndModify: false, new: true};
    const record = await MealRecordModel.findOneAndUpdate(filter, update, options);
    return {
      statusCode: 200,
      message: `Patient meal record created successfully`,
      data: record
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
