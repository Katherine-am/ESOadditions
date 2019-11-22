const MongIncident = require('../models/incident/incident');
const Incident = MongIncident.Incident;
const MongPatient = require('../models/_patientMaster/patientMasterModel');
const Patient = MongPatient.Patient;

module.exports = {
    newIncident: function(req, res) {
        Incident.create(req.body)
            .then(data => {
                Patient.updateOne({ _id: req.params.id }, { $addToSet: { incident: data } })
                    .then(data => res.json({ message: "success", result: data }))
                    .catch(err => res.json({ message: "We have an error", result: err }))
            })
            .catch(err => res.json({ message: "We have an error", result: err }))
    }
}