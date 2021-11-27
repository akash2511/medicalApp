'use strict';

const ExerciseModel = require('../schemas/exercises');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { query } = request;
  const ids = Array.isArray(query.ids) ? query.ids : [query.ids];
  try {
    const exercise = await ExerciseModel.findOne({ _id: {$in: ids}});;

    return {
      statusCode: 200,
      message: `exercise fetched successfully`,
      data: exercise
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
