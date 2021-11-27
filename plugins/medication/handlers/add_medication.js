'use strict';

const MedicationModel = require('../schemas/medication');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { payload } = request;
  try {

    const medication = await MedicationModel.create(payload);

    return {
      statusCode: 201,
      message: `Medication is created`,
      data: medication
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
