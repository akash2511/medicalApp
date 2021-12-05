'use strict';

const ProfileModel = require('../schemas/profile');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { auth: {credentials} } = request;
  const _id = credentials.profile_id
  try {
    const profile = await ProfileModel.findOne({ _id, archive: false });

    return {
      statusCode: 200,
      message: `Profile fetched successfully`,
      data: profile
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
