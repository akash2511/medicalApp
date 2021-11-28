'use strict';

const MedicationModel = require('../schemas/medication');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  try {
    const medications = await MedicationModel.find({archive: false});

    return {
      statusCode: 201,
      message: `Medications fetched successfully`,
      data: medications
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
