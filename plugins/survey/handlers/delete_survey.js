'use strict';

const SurveyModel = require('../schemas/survey');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { params } = request;
  try {
    const filter = { _id: params.id };
    const update = { archive: true}
    const options = { useFindAndModify: false };
    const survey = await SurveyModel.findOneAndUpdate(filter, update, options);

    return {
      statusCode: 204,
      message: `Survey deleted successfully`
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
