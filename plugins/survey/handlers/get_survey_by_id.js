'use strict';

const SurveyModel = require('../schemas/survey');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { params } = request;
  try {
    const filter = { _id: params.id, archive: false };
    const survey = await SurveyModel.findOne(filter);

    return {
      statusCode: 201,
      message: `Survey fetched successfully`,
      data: survey
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
