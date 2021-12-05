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
    do_you_smoke: Joi.string(),
    do_you_drink: Joi.string(),
    height: Joi.object().keys({
      measurement: Joi.number(),
      unit_of_measurement: Joi.string(),
      date: Joi.date()
    }),
    weight: Joi.object().keys({
      measurement: Joi.number(),
      unit_of_measurement: Joi.string(),
      date: Joi.date()
    }),
    questionaire_shown: Joi.boolean(),
    emr: Joi.array().items(Joi.string()),
    doctor_id: Joi.string()
  })
};
