'use strict';

const Boom = require('@hapi/boom');
const VitaminAndSupplementsModel = require('../schemas/vitamins_and_supplements')
module.exports = async (request, h) => {
  const {
    params,
    payload
  } = request;
  try {
    const query = {_id: params.vitainSupplementId}
    const options = { new: true }  
    const vitamins_and_supplements = await VitaminAndSupplementsModel.findOneAndUpdate(query, payload, options)
    return {
      statusCode: 201,
      message: 'vitamins and supplements edited successfully',
      data: vitamins_and_supplements
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
