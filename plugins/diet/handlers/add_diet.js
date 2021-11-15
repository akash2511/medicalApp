'use strict';

const Boom = require('@hapi/boom');
const DietModel = require('../schemas/diet')
module.exports = async (request, h) => {
  const {
    payload
  } = request;
  try {
   const diet = await DietModel.create(payload)
    return {
      statusCode: 201,
      message: 'Diet created successfully',
      data: diet
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
