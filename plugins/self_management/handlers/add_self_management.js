'use strict';

const SelfManagementModel = require('../schemas/self_management');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { payload } = request;
  try {

    const self_management = await SelfManagementModel.create(payload);

    return {
      statusCode: 201,
      message: `Self management created successfully`,
      data: self_management
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
