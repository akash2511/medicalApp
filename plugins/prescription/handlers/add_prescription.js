'use strict';

const PrescriptionModel = require('../schemas/prescription');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { payload, server } = request;
  try {

    const prescription = await PrescriptionModel.create(payload);
    const emr_update = await server.methods.update_prescription_id(payload.emr_id, prescription._id)
    return {
      statusCode: 201,
      message: `prescription is created`,
      data: prescription
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
