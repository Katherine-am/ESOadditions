const MongDemographic = require('../models/_patientMaster/demographics')
const Demographic = MongDemographic.Demographics;
const MongPatient = require('../models/_patientMaster/patientMasterModel')
const Patient = MongPatient.Patient;

module.exports = {
    addDemographics: function(req, res) {
        Demographic.create(req.body)
            .then(data => {
                Patient.updateOne({ _id: req.params.id }, { $addToSet: { demographics: data } })
                    .then(data => res.json({ message: "success", result: data }))
                    .catch(err => res.json({ message: "We have an error", result: err }))
            })
            .catch(err => res.json({ message: "We have an error", result: err }))
    }
}