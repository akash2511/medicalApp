'use strict';

const ProfileModel = require('../schemas/profile');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  try {
    const profile = await ProfileModel.find({archive: false});

    return {
      statusCode: 200,
      message: `Profiles fetched successfully`,
      data: profile
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
