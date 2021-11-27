'use strict';

const Joi = require('joi');

module.exports = {
  params: Joi.object({
    patientId: Joi.string().required()
  })
};