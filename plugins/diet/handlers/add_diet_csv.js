'use strict';

const Boom = require('@hapi/boom');
const DietModel = require('../schemas/diet')
const csv_to_json = require('../../../utils/csv_to_json');

module.exports = async (request, h) => {
  const {
    payload
  } = request;
  try {
    const csv_data = await csv_to_json(payload.path)
    const diet = await DietModel.create(csv_data)
    return {
      statusCode: 201,
      message: 'Diet created successfully',
      data: diet
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
