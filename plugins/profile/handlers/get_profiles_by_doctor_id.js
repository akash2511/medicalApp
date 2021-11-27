'use strict';

const ProfileModel = require('../schemas/profile');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { auth: {credentials} } = request;
  const doctor_id = credentials.profile_id
  try {
    const profiles = await ProfileModel.find({ doctor_id, archive: false });

    return {
      statusCode: 200,
      message: `Profiles fetched successfully`,
      data: profiles
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
