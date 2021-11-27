'use strict';

const Joi = require('joi');

module.exports = {
  payload: Joi.object({
    medication_id: Joi.string().required(),
    emr_id: Joi.string().required(),
    notes: Joi.string().required()
  })
};
