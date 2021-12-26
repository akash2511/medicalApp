'use strict';

const Boom = require('@hapi/boom');
const moment = require('moment');
const getByField = require('../../../utils/get_by_field');

module.exports = async (request, h) => {
  const { params, server } = request;
  const {patient_id} = params;
  try {
    const meal_records = await server.methods.get_patients_meal_records(patient_id);
    const meal_records_filtered = meal_records.slice(-10);
    const diet_ids = [];
    let graph_object = {};
    meal_records_filtered.forEach(meal_record => {
      graph_object[`${moment(meal_record.date).format('YYYY/MM/DD')}`] = {calories_intake: 0};
      if (meal_record.breakfast) meal_record.breakfast.forEach(item => diet_ids.push(item.id));
      if (meal_record.lunch) meal_record.lunch.forEach(item => diet_ids.push(item.id));
      if (meal_record.snack) meal_record.snack.forEach(item => diet_ids.push(item.id));
      if (meal_record.dinner) meal_record.dinner.forEach(item => diet_ids.push(item.id));
    })
    const diets = await server.methods.check_diet(diet_ids);
    const diets_by_id = getByField({data: diets});
    meal_records_filtered.forEach(meal_record => {
      if (meal_record.breakfast && meal_record.breakfast.length > 0){
        meal_record.breakfast.forEach(item => {
          graph_object[`${moment(meal_record.date).format('YYYY/MM/DD')}`]['calories_intake'] += (item.quantity * diets_by_id[item.id]['calories']['measurement']) / diets_by_id[item.id]['serving']['measurement'];
        })
      }
      if (meal_record.lunch && meal_record.lunch.length > 0){
        meal_record.lunch.forEach(item => {
          graph_object[`${moment(meal_record.date).format('YYYY/MM/DD')}`]['calories_intake'] += (item.quantity * diets_by_id[item.id]['calories']['measurement']) / diets_by_id[item.id]['serving']['measurement'];
        })
      }
      if (meal_record.snack && meal_record.snack.length > 0){
        meal_record.snack.forEach(item => {
          graph_object[`${moment(meal_record.date).format('YYYY/MM/DD')}`]['calories_intake'] += (item.quantity * diets_by_id[item.id]['calories']['measurement']) / diets_by_id[item.id]['serving']['measurement'];
        })
      }
      if (meal_record.dinner && meal_record.dinner.length > 0){
        meal_record.dinner.forEach(item => {
          graph_object[`${moment(meal_record.date).format('YYYY/MM/DD')}`]['calories_intake'] += (item.quantity * diets_by_id[item.id]['calories']['measurement']) / diets_by_id[item.id]['serving']['measurement'];
        })
      }
    })
    return {
      statusCode: 201,
      message: `Calories intake report generated successfully`,
      data: graph_object
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
