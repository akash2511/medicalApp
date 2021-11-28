'use strict';
const Joi = require('joi');

module.exports = {
  params: Joi.object({
    dietId: Joi.string().required()
  }),
  payload: Joi.object({
    name: Joi.string(),
    type: Joi.array().items(Joi.string()),
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
    dietaryFiber: Joi.object().keys({
      measurement: Joi.number(),
      unit_of_measurement: Joi.string(),
    }),
    sugars: Joi.object().keys({
      measurement: Joi.number(),
      unit_of_measurement: Joi.string(),
    }),
    protein: Joi.object().keys({
      measurement: Joi.number(),
      unit_of_measurement: Joi.string(),
    }),
    fats: Joi.object().keys({
        saturated: Joi.object().keys({
          measurement: Joi.number(),
          unit_of_measurement: Joi.string(),
        }),
        polyunsaturated: Joi.object().keys({
          measurement: Joi.number(),
          unit_of_measurement: Joi.string(),
        }),
        monounsaturated: Joi.object().keys({
          measurement: Joi.number(),
          unit_of_measurement: Joi.string(),
        }),
        trans: Joi.object().keys({
          measurement: Joi.number(),
          unit_of_measurement: Joi.string(),
        }),
        cholestrol: Joi.object().keys({
          measurement: Joi.number(),
          unit_of_measurement: Joi.string(),
        }),
        total_fat: Joi.object().keys({
          measurement: Joi.number(),
          unit_of_measurement: Joi.string(),
        }),
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
    }),
    minerals: Joi.object().keys({
      calcium: Joi.object().keys({
        measurement: Joi.number(),
        unit_of_measurement: Joi.string(),
      }),
      sodium: Joi.object().keys({
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
