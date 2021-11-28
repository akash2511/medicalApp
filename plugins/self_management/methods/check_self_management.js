'use strict';

const SelfManagementModel = require('../schemas/self_management');

module.exports = {
  name: 'check_self_management',
  method: async (self_management_id) => {
    try {
      const filter = {
        _id: self_management_id,
        archive: false
      };
      const self_management = await SelfManagementModel.findOne(filter);
      return self_management;
    } catch (e) {
      throw e;
    }
  }
};
