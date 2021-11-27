'use strict';

const ExerciseModel = require('../schemas/exercises');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  try {
    const exercise = await ExerciseModel.find({ archive: false });;

    return {
      statusCode: 200,
      message: `exercises fetched successfully`,
      data: exercise
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
