'use strict';

const bcrypt = require('bcrypt');
const User = require('../schemas/users');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const {
    payload,
    auth: { credentials }
  } = request;
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(payload.newpassword, salt);

    const user = await User.findOne({ _id: credentials.id, archive: false });
    if (!user) {
      return Boom.badRequest('Invalid user');
    }

    const match = await bcrypt.compare(payload.oldpassword, user.password);

    if (!match) {
      return Boom.badRequest('Invalid password');
    }

    const options = {
      useFindAndModify: false,
      new: true,
      projection: { _id: 1, user: 1, name: 1, user_type: 1, roles: 1 }
    };

    const updated_user = await User.findOneAndUpdate({ _id: credentials.id }, { password: hash }, options);

    return {
      statusCode: 201,
      message: 'password updated successfully',
      data: updated_user
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
