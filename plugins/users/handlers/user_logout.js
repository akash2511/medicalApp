'use strict';

const jwt = require('jsonwebtoken');
const jwt_private_key = require('../../auth/util/config');
const { promisify } = require('util');

const redis = require('redis');
const redis_client = redis.createClient();

const client_set_async = promisify(redis_client.set).bind(redis_client);
const client_get_async = promisify(redis_client.get).bind(redis_client);

module.exports = async (request, h) => {
  const {
    auth: { token }
  } = request;
  try {
    const decoded = jwt.decode(token, jwt_private_key);

    const redis_result = await client_get_async(decoded.id);

    const session = JSON.parse(redis_result);

    // mark session invalid
    session.valid = false;
    session.ended = new Date().getTime();

    // set session info into redis.
    await client_set_async(decoded.id, JSON.stringify(session));

    return {
      statusCode: 201,
      message: 'User Logged out Successfully'
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
