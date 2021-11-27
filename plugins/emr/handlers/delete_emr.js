'use strict';

const EmrModel = require('../schemas/emr');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { params } = request;
  const id = params.id;
  try {

    const emr = await EmrModel.find({_id: id}, {archive: true});

    return {
      statusCode: 204,
      message: `Emr deleted successfully`
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
