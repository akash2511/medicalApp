'use strict';

const Joi = require('joi');

module.exports = {
  params: Joi.object({
    id: Joi.string().required(),
  }),
  payload: Joi.object({
    medication_for: Joi.string(),
    drug_class: Joi.string(),
    type: Joi.string(),
    generic_name: Joi.string(),
    brand_name: Joi.string(),
    description: Joi.string(),
    diet_plan_id: Joi.string(),
    self_management_id: Joi.string()
  })
};