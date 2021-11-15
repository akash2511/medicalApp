'use strict';

try {
  const HapiSwagger = require('hapi-swagger');
  const Inert = require('@hapi/inert');
  const Vision = require('@hapi/vision');
  const Good = require('@hapi/good');

  const diet = require('./plugins/diet');
  const vitamins_and_supplements = require('./plugins/vitamins_and_supplements');

  module.exports = {
    server: {
      port: process.env.PORT || 3004,
      routes: {
        validate: {
          failAction: (request, h, e) => {
            console.error(e.message);
            throw e;
          }
        },
        cors: {
          origin: ['*'],
          credentials: true,
          additionalExposedHeaders: ['X-Total-Count']
        }
      },
      debug: {
        log: ['error'],
        request: ['error']
      }
    },
    register: {
      plugins: [
        Inert,
        Vision,
        {
          plugin: HapiSwagger,
          options: {
            info: {
              title: `Health App`,
            },
            pathPrefixSize: 2,
            basePath: '/api',
            securityDefinitions: {
              Bearer: {
                type: 'apiKey',
                name: 'Authorization',
                in: 'header',
                'x-keyPrefix': 'Bearer'
              }
            },
            security: [{ Bearer: [] }]
          }
        },
        {
          plugin: Good,
          options: {
            ops: {
              interval: 1000
            },
            reporters: {
              myConsoleReporter: [
                {
                  module: '@hapi/good-squeeze',
                  name: 'Squeeze',
                  args: [{ log: '*', response: '*' }]
                },
                {
                  module: '@hapi/good-console'
                },
                'stdout'
              ]
            }
          }
        },
        {
          plugin: diet
        },
        {
          plugin: vitamins_and_supplements
        }
      ]
    }
  }
} catch (e) {
    console.log('manifest err ', e);
} finally {
  console.log('manifest loaded!');
}
