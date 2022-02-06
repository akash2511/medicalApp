'use strict';

const Boom = require('@hapi/boom');
const VitaminAndSupplementsModel = require('../schemas/vitamins_and_supplements')
const csv_to_json = require('../../../utils/csv_to_json');

module.exports = async (request, h) => {
  const {
    payload
  } = request;
  try {
    const csv_data = await csv_to_json(payload.path)
    const vitamins_and_supplements = await VitaminAndSupplementsModel.create(csv_data)
    return {
      statusCode: 201,
      message: 'vitamins and supplements created successfully',
      data: vitamins_and_supplements
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
