'use strict';
const axios = require('axios');
const csv = require('csvtojson');

module.exports = async (csv_url) => {
  try {
    const { data } = await axios({url:csv_url});
    const result = await csv({ ignoreEmpty: true }).fromString(data);

    if (!result) {
      throw 'csv_to_json failed!';
    }

    return result;
  } catch (e) {
    throw e;
  }
};
