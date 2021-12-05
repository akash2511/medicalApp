'use strict';

const ProfileModel = require('../schemas/profile');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { payload } = request;
  const {height, weight, ...rest_object} = payload;
  try {
    const update = {
      $set: rest_object,
      $push: { weight, height}
    }
    const profile = await ProfileModel.create(update);
    if (!profile) throw 'Profile creation failed';

    return {
      statusCode: 201,
      message: `Profile is created`,
      data: profile
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
