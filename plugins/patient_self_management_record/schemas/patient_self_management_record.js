'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { Schema } = mongoose;

const schema = new Schema(
  {
    patient_id: { type: String, required: true },
    exercise: [
      {
        _id: false,
        id: { type: String, required: false },
        duration_in_min: { type: Number, required: false }
      }
    ],
    sleep_in_min: { type: Number, required: false },
    date: { type: Date, required: true },
    archive: { type: Boolean, default: false }
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = mongoose.model('patient_self_management_record', schema, 'patient_self_management_record');
