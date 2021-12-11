'use strict';

const Boom = require('@hapi/boom');
const User = require('../schemas/users');
const bcrypt = require('bcrypt');

module.exports = async (request, h) => {
  const {
    payload,
    auth: { credentials }
  } = request;
  const { profile_id, new_password } = payload;
  const { userIds } = credentials;

  try {
    if (!userIds.includes(profile_id)) {
      return Boom.badRequest('invalid level id!');
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(new_password, salt);

    const options = {
      new: true,
      useFindAndModify: false
    };

    const update = {
      $set: { password: hash }
    };

    const result = await User.findOneAndUpdate({ _id: profile_id, archive: false }, update, options);

    if (!result) {
      return Boom.badRequest('Something went during reset password!');
    }

    return {
      statusCode: 200,
      message: `password reset successfully!`
    };
  } catch (e) {
    throw Boom.badRequest(e);
  }
};
