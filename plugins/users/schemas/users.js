'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { Schema } = mongoose;

const schema = new Schema(
  {
    user: { type: String, required: true, index: true, unique: true, trim: true, lowercase: true },
    password: { type: String, required: true },
    user_type: { type: String, required: true },
    profile_id: { type: String, required: false },
    roles: { type: Array, default: ['user'] },
    archive: { type: Boolean, default: false },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = mongoose.model('user', schema, 'user');
