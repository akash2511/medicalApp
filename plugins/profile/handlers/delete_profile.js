'use strict';

const ProfileModel = require('../schemas/profile');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { id } = request.params;
  try {
    const options = { useFindAndModify: false, new: true };
    const profile = await ProfileModel.findOneAndUpdate({ _id: id }, {archive: true}, options);

    return {
      statusCode: 204,
      message: `Profile deleted successfully`
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
