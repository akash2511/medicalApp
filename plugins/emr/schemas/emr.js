'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { Schema } = mongoose;

const schema = new Schema(
  {
    patient_id: { type: String, required: true },
    doctor_id: { type: String, required: true },
    medical_records: [{ 
      diagnosis: {type: String, required: false },
      treatment: {type: String, required: false }
    }],
    current_diagnosis_or_disease: {type: String, required: true },
    health_vitals: {
      bp: {type: String, required: false },
      heart_rate: {type: String, required: false },
      pulse_rate: {type: String, required: false },
      spo2: {type: String, required: false },
      hemoglobin: {type: String, required: false },
      platelet_count: {type: String, required: false }
    },
    prescription_ids: [{ type: String, required: false }],
    archive: { type: Boolean, default: false}
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = mongoose.model('emr', schema, 'emr');
