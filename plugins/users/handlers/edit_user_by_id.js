'use strict';

const User = require('../schemas/users');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const {
    params,
    payload,
    auth: { credentials }
  } = request;
  try {
    const user = await User.findOne({ _id: params._id, archive: false });

    if (!user) {
      return Boom.badRequest('Invalid user');
    }

    const options = { useFindAndModify: false, new: true };

    const updated_user = await User.findOneAndUpdate({ _id: params._id }, payload, options);

    return {
      statusCode: 201,
      message: 'User Updated Successfully',
      data: updated_user
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
