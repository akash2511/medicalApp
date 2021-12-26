'use strict';

module.exports = {
  method: 'POST',
  path: '/api/patients-medication',
  options: {
    tags: ['api'],
    description: "Add a patient's medication",
    auth: false,
    validate: require('../validations/add_new_patients_medication')
  },
  handler: require('../handlers/add_new_patients_medication')
};

