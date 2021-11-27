'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { Schema } = mongoose;

const schema = new Schema(
  {
    medication_for: { type: String, required: true },
    drug_class: { type: String, required: true },
    type: { type: String, required: true },
    generic_name: { type: String, required: false },
    brand_name: { type: String, required: false },
    description: { type: String, required: false },
    diet_plan_id: { type: String, required: true },
    self_management_id: { type: String, required: true },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = mongoose.model('medication', schema, 'medication');
