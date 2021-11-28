'use strict';

const SupplementModel = require('../schemas/vitamins_and_supplements');

module.exports = {
  name: 'check_supplements',
  method: async (supplement_ids) => {
    try {
      const filter = {
        _id: {$in: supplement_ids},
        archive: false
      };
      const vitamins_and_supplements = await SupplementModel.find(filter);
      return vitamins_and_supplements;
    } catch (e) {
      throw e;
    }
  }
};
