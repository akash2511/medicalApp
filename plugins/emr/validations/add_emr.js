'use strict';

const Joi = require('joi');

module.exports = {
  payload: Joi.object({
    patient_id: Joi.string().required(),
    doctor_id: Joi.string().required(),
    medical_records: Joi.array().items(Joi.object().keys({
      diagnosis: Joi.string(),
      treatment: Joi.string(),
    })),
    current_diagnosis_or_disease: Joi.string().required(),
    health_vitals: Joi.object().keys({
      bp: Joi.string(),
      heart_rate: Joi.string(),
      pulse_rate: Joi.string(),
      spo2: Joi.string(),
      hemoglobin: Joi.string(),
      platelet_count: Joi.string(),
    }),
    prescription_ids: Joi.array().items(Joi.string())
  })
};