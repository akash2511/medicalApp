'use strict';

const Boom = require('@hapi/boom');
const DietModel = require('../schemas/diet')
module.exports = async (request, h) => {
  try {
    const query = {archive: false}
    const diet = await DietModel.find(query)
    return {
      statusCode: 201,
      message: 'Diets Fetched successfully',
      data: diet
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
