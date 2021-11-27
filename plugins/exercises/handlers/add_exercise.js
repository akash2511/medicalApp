'use strict';

const ExerciseModel = require('../schemas/exercises');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { payload } = request;
  try {

    const exercise = await ExerciseModel.create(payload);

    return {
      statusCode: 201,
      message: `exercise created successfully`,
      data: exercise
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
