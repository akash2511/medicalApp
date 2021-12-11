'use strict';

const ProfileModel = require('../schemas/profile');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { params, payload } = request;
  const { id } = params;
  const {height, weight, ...rest_object} = payload;

  try {
    const filter = { _id: id, archive: false };
    const update = {
      $set: rest_object,
      $push: { weight, height}
    }
    const options = { useFindAndModify: false, new: true };
    const profile = await ProfileModel.findOneAndUpdate(filter, update, options);

    return {
      statusCode: 201,
      message: `Profile edited successfully`,
      data: profile
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
