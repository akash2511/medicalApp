'use strict';

const SurveyModel = require('../schemas/survey');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { payload } = request;
  try {
    const survey = await SurveyModel.create(payload);

    return {
      statusCode: 201,
      message: `Survey added successfully`,
      data: survey
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
