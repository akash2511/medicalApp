'use strict';

const EmrModel = require('../schemas/emr');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { payload } = request;
  try {

    const emr = await EmrModel.create(payload);

    return {
      statusCode: 201,
      message: `Emr created successfully`,
      data: emr
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
