'use strict';

const Boom = require('@hapi/boom');
const VitaminAndSupplementsModel = require('../schemas/vitamins_and_supplements')
module.exports = async (request, h) => {
  const {
    params
  } = request;
  try {
    const query = {_id: params.vitainSupplementId}
    const update = { archive: true}
    const options = { new: true }  
    const vitamins_and_supplements = await VitaminAndSupplementsModel.findOneAndUpdate(query, update, options)
    return {
      statusCode: 201,
      message: 'vitamins and supplements deleted successfully',
      data: vitamins_and_supplements
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
