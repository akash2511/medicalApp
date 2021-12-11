'use strict';

const Boom = require('@hapi/boom');
const DietModel = require('../schemas/diet')
module.exports = async (request, h) => {
  const {
    params,
    payload
  } = request;
  try {
    const query = {_id: params.dietId, archive: false}
    const options = { new: true }
    const diet = await DietModel.findOneAndUpdate(query, payload, options)
    return {
      statusCode: 201,
      message: 'Diet updated successfully',
      data: diet
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
