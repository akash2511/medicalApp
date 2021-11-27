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
    serving: Joi.object().keys({
      measurement: Joi.number(),
      unit_of_measurement: Joi.string(),
    }),
    calories: Joi.object().keys({
      measurement: Joi.number(),
      unit_of_measurement: Joi.string(),
    }),
    carbohydrates: Joi.object().keys({
      measurement: Joi.number(),
      unit_of_measurement: Joi.string(),
    }),
    protein: Joi.object().keys({
      measurement: Joi.number(),
      unit_of_measurement: Joi.string(),
    }),
    total_fat: Joi.object().keys({
      measurement: Joi.number(),
      unit_of_measurement: Joi.string(),
    }),
    vitamins: Joi.object().keys({
        vitaminA: Joi.object().keys({
          measurement: Joi.number(),
          unit_of_measurement: Joi.string(),
        }),
        vitaminB: Joi.object().keys({
          measurement: Joi.number(),
          unit_of_measurement: Joi.string(),
        }),
        vitaminB1: Joi.object().keys({
          measurement: Joi.number(),
          unit_of_measurement: Joi.string(),
        }),
        vitaminB2: Joi.object().keys({
          measurement: Joi.number(),
          unit_of_measurement: Joi.string(),
        }),
        vitaminB3: Joi.object().keys({
          measurement: Joi.number(),
          unit_of_measurement: Joi.string(),
        }),
        vitaminB5: Joi.object().keys({
          measurement: Joi.number(),
          unit_of_measurement: Joi.string(),
        }),
        vitaminB6: Joi.object().keys({
          measurement: Joi.number(),
          unit_of_measurement: Joi.string(),
        }),
        vitaminB7: Joi.object().keys({
          measurement: Joi.number(),
          unit_of_measurement: Joi.string(),
        }),
        vitaminB9: Joi.object().keys({
          measurement: Joi.number(),
          unit_of_measurement: Joi.string(),
        }),
        vitaminB12: Joi.object().keys({
          measurement: Joi.number(),
          unit_of_measurement: Joi.string(),
        }),
        vitaminC: Joi.object().keys({
          measurement: Joi.number(),
          unit_of_measurement: Joi.string(),
        }),
        vitaminD: Joi.object().keys({
          measurement: Joi.number(),
          unit_of_measurement: Joi.string(),
        }),
        vitaminE: Joi.object().keys({
          measurement: Joi.number(),
          unit_of_measurement: Joi.string(),
        }),
        vitaminK: Joi.object().keys({
          measurement: Joi.number(),
          unit_of_measurement: Joi.string(),
        }),
        choline: Joi.object().keys({
          measurement: Joi.number(),
          unit_of_measurement: Joi.string(),
        }),
        carnitine: Joi.object().keys({
          measurement: Joi.number(),
          unit_of_measurement: Joi.string(),
        }),
    }),
    minerals: Joi.object().keys({
      calcium: Joi.object().keys({
        measurement: Joi.number(),
        unit_of_measurement: Joi.string(),
      }),
      chloride: Joi.object().keys({
        measurement: Joi.number(),
        unit_of_measurement: Joi.string(),
      }),
      chromium: Joi.object().keys({
        measurement: Joi.number(),
        unit_of_measurement: Joi.string(),
      }),
      copper: Joi.object().keys({
        measurement: Joi.number(),
        unit_of_measurement: Joi.string(),
      }),
      fluoride: Joi.object().keys({
        measurement: Joi.number(),
        unit_of_measurement: Joi.string(),
      }),
      iodine: Joi.object().keys({
        measurement: Joi.number(),
        unit_of_measurement: Joi.string(),
      }),
      iron: Joi.object().keys({
        measurement: Joi.number(),
        unit_of_measurement: Joi.string(),
      }),
      magnesium: Joi.object().keys({
        measurement: Joi.number(),
        unit_of_measurement: Joi.string(),
      }),
      manganese: Joi.object().keys({
        measurement: Joi.number(),
        unit_of_measurement: Joi.string(),
      }),
      molybdenum: Joi.object().keys({
        measurement: Joi.number(),
        unit_of_measurement: Joi.string(),
      }),
      phosphorus: Joi.object().keys({
        measurement: Joi.number(),
        unit_of_measurement: Joi.string(),
      }),
      potassium: Joi.object().keys({
        measurement: Joi.number(),
        unit_of_measurement: Joi.string(),
      }),
      selenium: Joi.object().keys({
        measurement: Joi.number(),
        unit_of_measurement: Joi.string(),
      }),
      iodium: Joi.object().keys({
        measurement: Joi.number(),
        unit_of_measurement: Joi.string(),
      }),
      sulphur: Joi.object().keys({
        measurement: Joi.number(),
        unit_of_measurement: Joi.string(),
      }),
      zinc: Joi.object().keys({
        measurement: Joi.number(),
        unit_of_measurement: Joi.string(),
      }),
    })
  })
};
