'use strict';

const ExerciseModel = require('../schemas/exercises');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { params, payload } = request;
  const { id } = params;
  try {
    const options = { useFindAndModify: false, new: true };
    const exercise = await ExerciseModel.findOneAndUpdate({ _id: id }, payload, options);;

    return {
      statusCode: 201,
      message: `exercise edited successfully`,
      data: exercise
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
