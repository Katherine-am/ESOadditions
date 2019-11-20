const PatientModels = require('../models/_patientMaster/patientMasterModel');
const Patient = PatientModels.Patient;
const path = require('path');

module.exports = {
    newPatientMaster: function(req, res) {
        Patient.create(req.body)
            .then(data => res.json({ message: "success", result: data }))
            .catch(err => res.json({ message: "We have an error", result: err }))
    }
}