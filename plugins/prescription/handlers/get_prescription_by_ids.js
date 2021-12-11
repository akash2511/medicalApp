'use strict';

const PrescriptionModel = require('../schemas/prescription');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { query } = request;
  const ids = Array.isArray(query.ids) ? query.ids : [query.ids];
  try {

    const prescription = await PrescriptionModel.find({_id: {$in: ids}, archive: false})
    return {
      statusCode: 201,
      message: `prescription fetched successfully`,
      data: prescription
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
