'use strict';

const DietPlanModel = require('../schemas/diet_plan');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  try {

    const diet_plan = await DietPlanModel.find({ archive: false });

    return {
      statusCode: 201,
      message: `Diet plan fetched successfully`,
      data: diet_plan
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
