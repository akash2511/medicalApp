'use strict';

const { promisify } = require('util');
const HapiAuthJwt2 = require('hapi-auth-jwt2');
const Boom = require('@hapi/boom');
const redis = require("redis");
const redis_client = redis.createClient();

const client_get_async = promisify(redis_client.get).bind(redis_client);
const jwt_private_key = require('./util/config');
const Users = require('../users/schemas/users');

const validate = async function(decoded, request, h) {
  try {
    // check if the `sessio` exists into redis.
    const redis_reply = await client_get_async(decoded.id);
    if (!redis_reply) {
      return { isValid: false };
    }

    // parse session info.
    const session = JSON.parse(redis_reply);
    // check if the session is valid or not.
    if (session.valid === true) {
      const result = await Users.findOne(
        { _id: session.user },
        { password: 0}
      );
      if (!result) {
        return { isValid: false };
      }

      // set credentials info.
      return {
        isValid: true,
        credentials: Object.assign(result, { role: result.roles, sessionId: decoded.id })
      };
    }

    return { isValid: false };
  } catch (e) {
    return Boom.badRequest('validate function err ', e);
  }
};


exports.plugin = {
  name: 'auth',
  version: '1.0.0',
  register: (server, options) => {
    server.register(HapiAuthJwt2);

    server.auth.strategy('jwt', 'jwt', {
      key: jwt_private_key,
      validate,
      verifyOptions: { algorithms: ['HS256'] }
    });
  }
};

