'use strict';

const SurveyModel = require('../schemas/survey');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { params } = request;
  try {
    const filter = { archive: false };
    const surveys = await SurveyModel.find(filter);

    return {
      statusCode: 201,
      message: `Surveys fetched successfully`,
      data: surveys
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
