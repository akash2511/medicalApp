'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { Schema } = mongoose;

const schema = new Schema(
  {
    medication_id: { type: String, required: true },
    emr_id: { type: String, required: true },
    notes: { type: String, required: true },
    archive: { type: Boolean, default: false }
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = mongoose.model('prescription', schema, 'prescription');
