'use strict';

const Boom = require('@hapi/boom');
const VitaminAndSupplementsModel = require('../schemas/vitamins_and_supplements')
module.exports = async (request, h) => {
  const { query } = request;
  const ids = Array.isArray(query.ids) ? query.ids : [query.ids];
  try {
    const vitamins_and_supplements = await VitaminAndSupplementsModel.find({_id: {$in: ids},archive: false})
    return {
      statusCode: 201,
      message: 'vitamins and supplements fetched successfully',
      data: vitamins_and_supplements
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
