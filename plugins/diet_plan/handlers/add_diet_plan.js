'use strict';

const DietPlanModel = require('../schemas/diet_plan');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { payload } = request;
  try {

    const diet_plan = await DietPlanModel.create(payload);

    return {
      statusCode: 201,
      message: `Diet plan created successfully`,
      data: diet_plan
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
