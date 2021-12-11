'use strict';

const Boom = require('@hapi/boom');
const VitaminAndSupplementsModel = require('../schemas/vitamins_and_supplements')
module.exports = async (request, h) => {
  const {
    params,
    payload
  } = request;
  try {
    const filter = {_id: params.vitainSupplementId, archive: false}
    const options = { new: true }  
    const vitamins_and_supplements = await VitaminAndSupplementsModel.findOneAndUpdate(filter, payload, options)
    return {
      statusCode: 201,
      message: 'vitamins and supplements edited successfully',
      data: vitamins_and_supplements
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
