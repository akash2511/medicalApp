'use strict';

const SelfManagementModel = require('../schemas/self_management');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  try {

    const self_management = await SelfManagementModel.find({archive: false});

    return {
      statusCode: 201,
      message: `Self management fetched successfully`,
      data: self_management
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
