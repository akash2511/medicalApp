'use strict';
module.exports = ({data, field = '_id'}) => {
  let byId = {}
  data.forEach(datum => {
    byId[datum[field]] = datum
  })
  return byId
}