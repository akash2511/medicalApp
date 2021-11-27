'use strict';

const ProfileModel = require('../schemas/profile');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { query } = request;
  const ids = Array.isArray(query.ids) ? query.ids : [query.ids];
  try {
    const profile = await ProfileModel.find({ _id: {$in: ids} });

    return {
      statusCode: 200,
      message: `Profile fetched successfully`,
      data: profile
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
