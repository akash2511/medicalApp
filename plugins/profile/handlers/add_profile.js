'use strict';

const ProfileModel = require('../schemas/profile');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { payload } = request;
  try {

    const profile = await ProfileModel.create(payload);
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
