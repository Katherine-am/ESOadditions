const mongoose = require('mongoose');
const vitalModel = require('../models/vitals/vitals')
const patientMaster = require('../models/_patientMaster/patientMasterModel')
const MongVitals = require('../models/vitals/vitals')

const Patient = patientMaster.Patient;
const vitals = MongVitals.Vitals;


module.exports = {
    Vitals: function (req, res) {
        Patient.findOne({ _id: req.params.id })
            .then(data => res.json({ msg: "Success", result: data }))
            .catch(err => res.json({ msg: "Error", err: err }));
    },

    Vitalsedit: function (req, res) {
        Patient.update({ _id: req.params.id }, { $push: { vitals: [req.body] } }, { runValidators: true })
            .then(data => res.json({ msg: "Success", result: data }))
            .catch(err => res.json({ msg: "Error", err: err }))
    }

    // app.put("/api/:id/vital", (req, res) => {

    //     Patient.update({ _id: req.params.id }, { $push: { Vitals: [req.body] } }, { runValidators: true })
    //         .then(data => res.json({ msg: "Success", result: data }))
    //         .catch(err => res.json({ msg: "Error", err: err }))
    // });
}
