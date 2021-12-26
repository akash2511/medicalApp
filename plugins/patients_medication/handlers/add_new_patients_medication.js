'use strict';

const PatientsMedicationModel = require('../schemas/patients_medication');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { payload } = request;
  try {

    const medication = await PatientsMedicationModel.create(payload);

    return {
      statusCode: 201,
      message: `Patients Medication is created`,
      data: medication
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
