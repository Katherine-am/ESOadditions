const mongoose = require('mongoose');
const patientMaster = require('../models/_patientMaster/patientMasterModel')
const MongFlowchart = require('../models/flowchart/flowchartMaster')
const FlowchartMaster = MongFlowchart.FlowChart;
const MongAirway = require('../models/flowchart/flowchartSubModels/airway')
const Airway = MongAirway.Airway
const Patient = patientMaster.Patient;
module.exports = {
    Flowchart: function (req, res) {
        Patient.findOne({ _id: req.params.id })
            .then(data => res.json({ msg: "Success", result: data }))
            .catch(err => res.json({ msg: "Error", err: err }));
    },
    Flowchartedit: function (req, res) {
        Patient.update({ _id: req.params.id }, { $push: { flowchart: [req.body] } }, { runValidators: true })
            .then(data => res.json({ msg: "Success", result: data }))
            .catch(err => res.json({ msg: "Error", err: err }))
    }
}