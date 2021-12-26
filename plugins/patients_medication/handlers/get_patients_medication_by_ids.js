'use strict';

const PatientsMedicationModel = require('../schemas/patients_medication');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { query } = request;
  const ids = Array.isArray(query.ids) ? query.ids : [query.ids];
  try {
    const medication = await PatientsMedicationModel.findOne({ _id: {$in: ids}, archive: false });

    return {
      statusCode: 201,
      message: `Medication fetched successfully`,
      data: medication
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
