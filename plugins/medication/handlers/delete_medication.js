'use strict';

const MedicationModel = require('../schemas/medication');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { params } = request;
  const { id } = params;
  try {
    const options = { useFindAndModify: false, new: true };
    const medication = await MedicationModel.findOneAndUpdate({ _id: id }, {archive: true}, options);

    return {
      statusCode: 204,
      message: `medication deleted successfully`
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
