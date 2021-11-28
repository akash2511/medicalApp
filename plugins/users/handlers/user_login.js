'use strict';

const bcrypt = require('bcrypt');
const Boom = require('@hapi/boom');
const User = require('../schemas/users');
const create_token = require('../../auth/util/create_token');
const uuid = require('uuid');
const { promisify } = require('util');
const redis = require('redis');
const redis_client = redis.createClient();
const client_set_async = promisify(redis_client.set).bind(redis_client);

module.exports = async (request, h) => {
  const { payload } = request;
  try {
    const user = await User.findOne({ user: payload.user.toLowerCase(), archive: false });

    if (!user) {
      return Boom.badRequest('Invalid User name or Password');
    }

    const match = await bcrypt.compare(payload.password, user.password);

    if (!match) {
      return Boom.badRequest('Invalid User name or Password');
    }

    const session = {
      valid: true, // this will be set to false when the person logs out
      id: uuid.v4(), // a random session id
      user: user._id
    };

    await client_set_async(session.id, JSON.stringify(session));

    const token = await create_token(session);

    return {
      statusCode: 201,
      message: 'User Logged in Successfully',
      jwt: token,
      _id: user._id,
      name: user.name,
      user_type: user.user_type,
      user: user.user,
      roles: user.roles
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
