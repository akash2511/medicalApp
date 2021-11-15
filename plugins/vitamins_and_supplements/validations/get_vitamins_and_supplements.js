'use strict';
const Joi = require('joi');

module.exports = {
  params: Joi.object({
    vitainSupplementId: Joi.string().required()
  })
}