'use strict';

const Glue = require('@hapi/glue');
const mongoose = require('mongoose');
const manifest = require('./manifest');
mongoose.Promise = require('bluebird');

exports.deployment = async(start) => {
  try {
    const server = await Glue.compose(manifest, { relativeTo: __dirname });
    await server.initialize();
  
    if (!start) {
      return server;
    }
  
    await server.start();
  
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Server started at ${server.info.uri}`);
    return server;
  } catch (e) {
    console.log(e);
  }
}
if (require.main === module) {
  exports.deployment(true);

  process.on('unhandledRejection', (err) => {
    throw err;
  });
}