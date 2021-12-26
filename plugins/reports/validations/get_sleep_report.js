'use strict';

const Joi = require('joi');

module.exports = {
  params: Joi.object({
    patient_id: Joi.string().required()
  })
};