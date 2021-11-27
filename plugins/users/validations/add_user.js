'use strict';

const Joi = require('joi');

module.exports = {
  payload: Joi.object({
    user: Joi.string().required(),
    password: Joi.string()
      .min(6)
      .max(30)
      .required(),
    user_type: Joi.string().required(),
    profile_id: Joi.string().required(),
    roles: Joi.array()
  })
};
