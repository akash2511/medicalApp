'use strict';

const Joi = require('joi');

module.exports = {
  payload: Joi.object({
    user: Joi.string().required(),
    password: Joi.string()
      .min(3)
      .max(30)
      .required()
  })
};
