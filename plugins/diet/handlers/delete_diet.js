'use strict';

const Boom = require('@hapi/boom');
const DietModel = require('../schemas/diet')
module.exports = async (request, h) => {
  const {
    params
  } = request;
  try {
    const query = {_id: params.dietId}
    const update = { archive: true}
    const options = { new: true }
    const diet = await DietModel.findOneAndUpdate(query, update, options)
    return {
      statusCode: 201,
      message: 'Diet deleted successfully',
      data: diet
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
