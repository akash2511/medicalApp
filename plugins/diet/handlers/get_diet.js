'use strict';

const Boom = require('@hapi/boom');
const DietModel = require('../schemas/diet')
module.exports = async (request, h) => {
  const {
    params
  } = request;
  try {
    const query = {_id: params.dietId}
    const diet = await DietModel.findOne(query)
    return {
      statusCode: 201,
      message: 'Diet Fetched successfully',
      data: diet
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
