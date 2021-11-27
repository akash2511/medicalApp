'use strict';

const ProfileModel = require('../schemas/profile');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { params, payload } = request;
  const { id } = params;
  try {
    const options = { useFindAndModify: false, new: true };
    const profile = await ProfileModel.findOneAndUpdate({ _id: id }, payload, options);

    return {
      statusCode: 201,
      message: `Profile edited successfully`,
      data: profile
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
