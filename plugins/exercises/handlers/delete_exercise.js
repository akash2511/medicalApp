'use strict';

const ExerciseModel = require('../schemas/exercises');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { params } = request;
  const { id } = params;
  try {
    const options = { useFindAndModify: false, new: true };
    const exercise = await ExerciseModel.findOneAndUpdate({ _id: id }, {archive: true}, options);;

    return {
      statusCode: 204,
      message: `exercise deleted successfully`
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
