'use strict';

const Boom = require('@hapi/boom');
const DietModel = require('../schemas/diet')
module.exports = async (request, h) => {
  const { query } = request;
  const ids = Array.isArray(query.ids) ? query.ids : [query.ids];
  try {
    const diet = await DietModel.find({_id: {$in: ids}, archive: false})
    return {
      statusCode: 201,
      message: 'Diet Fetched successfully',
      data: diet
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
