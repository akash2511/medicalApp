'use strict';

const Joi = require('joi');

module.exports = {
  params: Joi.object({
    date: Joi.date().required()
  })
};
