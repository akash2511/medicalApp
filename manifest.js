'use strict';

try {
  const HapiSwagger = require('hapi-swagger');
  const Inert = require('@hapi/inert');
  const Vision = require('@hapi/vision');
  const Good = require('@hapi/good');
  const hapiAuthorization = require('hapi-authorization');

  const auth = require('./plugins/auth');
  const diet = require('./plugins/diet');
  const diet_plan = require('./plugins/diet_plan');
  const emr = require('./plugins/emr');
  const exercises = require('./plugins/exercises');
  const medication = require('./plugins/medication');
  const prescription = require('./plugins/prescription');
  const profile = require('./plugins/profile');
  const self_management = require('./plugins/self_management');
  const users = require('./plugins/users');
  const vitamins_and_supplements = require('./plugins/vitamins_and_supplements');
  const patient_meal_record = require('./plugins/patient_meal_record');
  const patients_medication = require('./plugins/patients_medication');
  const patient_self_management_record = require('./plugins/patient_self_management_record');
  const survey = require('./plugins/survey');
  const survey_questions = require('./plugins/survey_questions');
  const survey_submissions = require('./plugins/survey_submissions');

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
          plugin: hapiAuthorization,
          options: {
              roles: ['superAdmin', 'doctor', 'patient', 'user']	
          }
        },
        {
          plugin: auth
        },
        {
          plugin: diet
        },
        {
          plugin: diet_plan
        },
        {
          plugin: emr
        },
        {
          plugin: exercises
        },
        {
          plugin: medication
        },
        {
          plugin: profile
        },
        {
          plugin: prescription
        },
        {
          plugin: self_management
        },
        {
          plugin: users
        },
        {
          plugin: vitamins_and_supplements
        },
        {
          plugin: patients_medication
        },
        {
          plugin: patient_meal_record
        },
        {
          plugin: patient_self_management_record
        },
        {
          plugin: survey
        },
        {
          plugin: survey_questions
        },
        {
          plugin: survey_submissions
        }
      ]
    }
  }
} catch (e) {
    console.log('manifest err ', e);
} finally {
  console.log('manifest loaded!');
}
