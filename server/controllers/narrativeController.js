const MongNarrative = require('../models/narrative/narrative');
const Narrative = MongNarrative.Narrative;
const MongPatient = require('../models/_patientMaster/patientMasterModel')
const Patient = MongPatient.Patient

module.exports = {
    newSubjectiveNarrative: function(req, res) {
        Narrative.create(req.body)
            .then(data => {
                Patient.updateOne({ _id: req.params.id }, { $addToSet: { narrative: data } })
                    .then(data => res.json({ message: "success", result: data }))
                    .catch(err => res.json({ message: "We have an error", result: err }))
            })
            .catch(err => res.json({ message: "We have an error", result: err }))
    }
}