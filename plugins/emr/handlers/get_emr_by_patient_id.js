'use strict';

const EmrModel = require('../schemas/emr');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { params } = request;
  const { patientId } = params
  try {

    const emr = await EmrModel.findOne({_id: patientId, archive: false});

    return {
      statusCode: 201,
      message: `Emr fetched successfully`,
      data: emr
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
