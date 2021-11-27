'use strict';

const DietPlanModel = require('../schemas/diet_plan');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { query } = request;
  const ids = Array.isArray(query.ids) ? query.ids : [query.ids];
  try {

    const diet_plan = await DietPlanModel.find({_id: {$in: ids}});

    return {
      statusCode: 201,
      message: `Diet Plan fetched successfully`,
      data: diet_plan
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
