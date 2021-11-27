'use strict';

const Joi = require('joi');

module.exports = {
  payload: Joi.object({
    first_name: Joi.string().required(),
    middle_name: Joi.string(),
    last_name: Joi.string().required(),
    profile_pic: Joi.string(),
    dob: Joi.string().required(),
    emr: Joi.array().items(Joi.string()),
  })
};
