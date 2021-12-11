'use strict';

const SurveyModel = require('../schemas/survey');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { params, payload } = request;
  try {
    const filter = { _id: params.id, archive: false };
    const options = { useFindAndModify: false, new: true };
    const survey = await SurveyModel.findOneAndUpdate(filter, payload, options);

    return {
      statusCode: 201,
      message: `Survey edited successfully`,
      data: survey
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
