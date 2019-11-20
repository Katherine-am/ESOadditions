const MongModels = require('../models/models');
const Patient = MongModels.Patient;
const path = require('path');

module.exports = {
//     incident: (req, res) => {
//         Product.findOne({_id: req.params.id})
//         .then(data => res.json({message: "success", results: data}))
//         .catch(err => res.json({message: "error", results: err}));
//     },
    patient: (req, res) => {
        Patient.create(req.body)
            .then(data => res.json({message: "success", results: data}))
            .catch(err => res.json({message: "error", results: err}));
    },
//     vitals: (req, res) => {
//         Patient.deleteOne({_id: req.params.id})
//             .then(data => res.json({message: "success", results: data}))
//             .catch(err => res.json({message: "error", results: err}));
//     },

}