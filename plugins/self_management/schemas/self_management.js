'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { Schema } = mongoose;

const schema = new Schema(
  {
    type: { type: String, required: true },
    exercise: [{ type: String, required: true }],
    sleep_in_min: { type: Number, required: true },
    archive: { type: Boolean, default: false },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = mongoose.model('self_management', schema, 'self_management');
