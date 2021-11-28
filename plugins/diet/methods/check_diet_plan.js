'use strict';

const DietModel = require('../schemas/diet');

module.exports = {
  name: 'check_diet',
  method: async (diet_id) => {
    try {
      const filter = {
        _id: {$in: diet_id},
        archive: false
      };
      const diets = await DietModel.find(filter);
      return diets;
    } catch (e) {
      throw e;
    }
  }
};
