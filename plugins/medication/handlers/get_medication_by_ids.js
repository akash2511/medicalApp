'use strict';

const MedicationModel = require('../schemas/medication');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { query } = request;
  const ids = Array.isArray(query.ids) ? query.ids : [query.ids];
  try {
    const medication = await MedicationModel.findOne({ _id: {$in: ids}, archive: false });

    return {
      statusCode: 201,
      message: `Medication fetched successfully`,
      data: medication
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
