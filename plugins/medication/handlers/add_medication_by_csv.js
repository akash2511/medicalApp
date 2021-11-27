'use strict';
const csv_to_json = require('../../../utils/csv_to_json');
const MedicationModel = require('../schemas/medication');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { payload } = request;
  try {
    const csv_data = await csv_to_json(payload.path)
    const medications = await MedicationModel.create(csv_data);

    return {
      statusCode: 201,
      message: `medications are created`,
      data: medications
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
