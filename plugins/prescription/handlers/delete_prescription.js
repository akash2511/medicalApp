'use strict';

const PrescriptionModel = require('../schemas/prescription');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { params } = request;
  const { id } = params
  try {
    const query = {_id: params.id}
    const update = { archive: true}
    const prescription = await PrescriptionModel.findOneAndUpdate(query, update);
    return {
      statusCode: 204,
      message: `prescription deleted successfully`
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
