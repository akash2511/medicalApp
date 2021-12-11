'use strict';

const SelfManagementModel = require('../schemas/self_management');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { query } = request;
  const ids = Array.isArray(query.ids) ? query.ids : [query.ids];
  try {

    const self_management = await SelfManagementModel.find({_id: {$in: ids}, archive: false});

    return {
      statusCode: 201,
      message: `Self management fetched successfully`,
      data: self_management
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
