'use strict';

const Joi = require('joi');

module.exports = {
  params: Joi.object({
    id: Joi.string().required(),
  }),
  payload: Joi.object({
    breakfast: Joi.array().items(Joi.object().keys({
      diet_id: Joi.string(),
      servings: Joi.object().keys({
        measurement: Joi.number(),
        unit_of_measurement: Joi.string()
      })
    })),
    lunch: Joi.array().items(Joi.object().keys({
      diet_id: Joi.string(),
      servings: Joi.object().keys({
        measurement: Joi.number(),
        unit_of_measurement: Joi.string()
      })
    })),
    snack: Joi.array().items(Joi.object().keys({
      diet_id: Joi.string(),
      servings: Joi.object().keys({
        measurement: Joi.number(),
        unit_of_measurement: Joi.string()
      })
    })),
    dinner: Joi.array().items(Joi.object().keys({
      diet_id: Joi.string(),
      servings: Joi.object().keys({
        measurement: Joi.number(),
        unit_of_measurement: Joi.string()
      })
    })),
    supplement_ids: Joi.array().items(Joi.string()),
    exercise_ids: Joi.array().items(Joi.string()),
    sleep_in_min: Joi.number()
  })
};
