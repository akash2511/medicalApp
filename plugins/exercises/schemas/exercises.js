'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { Schema } = mongoose;

const schema = new Schema(
  {
    activity_group: { type: String, required: true },
    name: { type: String, required: true },
    calories_burnt: {
        value: { type: Number, required: true },
        duration: { type: String, required: true },
    },
    archive: { type: String, default: false }
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = mongoose.model('exercise', schema, 'exercise');
