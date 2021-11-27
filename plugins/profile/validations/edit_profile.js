'use strict';

const Joi = require('joi');

module.exports = {
  params: Joi.object({
    id: Joi.string().required()
  }),
  payload: Joi.object({
    first_name: Joi.string(),
    middle_name: Joi.string(),
    last_name: Joi.string(),
    profile_pic: Joi.string(),
    dob: Joi.string(),
    emr: Joi.array().items(Joi.string()),
    doctor_id: Joi.string()
  })
};
