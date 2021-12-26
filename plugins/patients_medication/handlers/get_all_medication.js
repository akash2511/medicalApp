'use strict';

const PatientsMedicationModel = require('../schemas/patients_medication');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  try {
    const medications = await PatientsMedicationModel.find({archive: false});

    return {
      statusCode: 201,
      message: `Medications fetched successfully`,
      data: medications
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
