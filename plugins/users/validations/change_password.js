'use strict';

const Joi = require('joi');

module.exports = {
  payload: Joi.object({
    oldpassword: Joi.string()
      .min(3)
      .max(30),
    newpassword: Joi.string()
      .min(3)
      .max(30)
  })
};
