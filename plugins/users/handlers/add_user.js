'use strict';

const bcrypt = require('bcrypt');
const UserModel = require('../schemas/users');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { payload } = request;
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(payload.password, salt);

    const data = Object.assign({}, payload, {
      password: hash
    });

    const user = await UserModel.create(data);
    if (!user) throw 'user creation failed';

    return {
      statusCode: 201,
      message: `user is created`,
      data: user
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
