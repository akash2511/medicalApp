'use strict';

const Boom = require('@hapi/boom');
const VitaminAndSupplementsModel = require('../schemas/vitamins_and_supplements')
module.exports = async (request, h) => {
  const {
    payload
  } = request;
  try {
   const vitamins_and_supplements = await VitaminAndSupplementsModel.create(payload)
    return {
      statusCode: 201,
      message: 'vitamins and supplements created successfully',
      data: vitamins_and_supplements
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
