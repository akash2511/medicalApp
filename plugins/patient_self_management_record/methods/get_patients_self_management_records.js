'use strict';

const SelfManagementRecordModel = require('../schemas/patient_self_management_record');

module.exports = {
  name: 'get_patients_self_management_records',
  method: async (patient_id) => {
    try {
      const filter = {
        patient_id,
        archive: false
      }
      const self_management = await SelfManagementRecordModel.find(filter);
      self_management.sort((a,b) => a.date - b.date);
      return self_management;
    } catch (e) {
      throw e;
    }
  }
};
