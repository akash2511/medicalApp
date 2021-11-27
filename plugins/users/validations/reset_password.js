'use strict';

const Joi = require('joi');

module.exports = {
  payload: Joi.object({
    profile_id: Joi.string().required(),
    new_password: Joi.string().required()
  })
};
