'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { Schema } = mongoose;

const schema = new Schema(
  {
    first_name: { type: String, required: true },
    middle_name: { type: String, required: false },
    last_name: { type: String, required: true },
    profile_pic: { type: String, required: false },
    dob: { type: String, required: true },
    emr: { type: Array, required: false },
    doctor_id: { type: String, required: false },
    archive: { type: Boolean, default: false },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = mongoose.model('profile', schema, 'profile');
