'use strict';
const Joi = require('joi');

module.exports = {
  params: Joi.object({
    vitainSupplementId: Joi.string().required()
  }),
  payload: Joi.object({
    name: Joi.string(),
    category: Joi.string(),
    form: Joi.string(),
    serving: Joi.string(),
    calories: Joi.number(),
    carbohydrates: Joi.number(),
    protein: Joi.number(),
    total_fat: Joi.number(),
    vitamins: Joi.object().keys({
        vitaminA: Joi.number(),
        vitaminB: Joi.number(),
        vitaminB1: Joi.number(),
        vitaminB2: Joi.number(),
        vitaminB3: Joi.number(),
        vitaminB5: Joi.number(),
        vitaminB6: Joi.number(),
        vitaminB7: Joi.number(),
        vitaminB9: Joi.number(),
        vitaminB12: Joi.number(),
        vitaminC: Joi.number(),
        vitaminD: Joi.number(),
        vitaminE: Joi.number(),
        vitaminK: Joi.number(),
        choline: Joi.number(),
        carnitine: Joi.number(),
    }),
    minerals: Joi.object().keys({
      calcium: Joi.number(),
      chloride: Joi.number(),
      chromium: Joi.number(),
      copper: Joi.number(),
      fluoride: Joi.number(),
      iodine: Joi.number(),
      iron: Joi.number(),
      magnesium: Joi.number(),
      manganese: Joi.number(),
      molybdenum: Joi.number(),
      phosphorus: Joi.number(),
      potassium: Joi.number(),
      selenium: Joi.number(),
      iodium: Joi.number(),
      sulphur: Joi.number(),
      zinc: Joi.number(),
    })
  })
};
