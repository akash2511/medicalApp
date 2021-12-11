'use strict';

const MedicationModel = require('../schemas/medication');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { params, payload } = request;
  const { id } = params;
  try {
    const options = { useFindAndModify: false, new: true };
    const medication = await MedicationModel.findOneAndUpdate({ _id: id , archive: false}, payload, options);

    return {
      statusCode: 201,
      message: `medication edited successfully`,
      data: medication
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
