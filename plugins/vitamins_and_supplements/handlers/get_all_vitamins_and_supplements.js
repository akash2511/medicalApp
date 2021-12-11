'use strict';

const Boom = require('@hapi/boom');
const VitaminAndSupplementsModel = require('../schemas/vitamins_and_supplements')
module.exports = async (request, h) => {
  const {
    params
  } = request;
  try {
    const filter = {archive: false}
    const vitamins_and_supplements = await VitaminAndSupplementsModel.find(filter)
    return {
      statusCode: 201,
      message: 'vitamins and supplements fetched successfully',
      data: vitamins_and_supplements
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
