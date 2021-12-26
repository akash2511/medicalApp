'use strict';

const PrescriptionModel = require('../schemas/prescription');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { payload, server: { methods } } = request;
  try {
    const emr = methods.check_emr(payload.emr_id);
    const patients_medication = methods.create_patients_medication(payload.medication_id, emr.patient_id, functions)
    const uploadObject = { 
      patient_id: emr.patient_id,
      patients_medication_id: patients_medication, 
      emr_id: payload.emr_id,
      notes: payload.notes
    }
    const prescription = await PrescriptionModel.create(uploadObject);
    const emr_update = await methods.update_prescription_id_in_emr(payload.emr_id, prescription._id)
    return {
      statusCode: 201,
      message: `prescription is created`,
      data: prescription
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
