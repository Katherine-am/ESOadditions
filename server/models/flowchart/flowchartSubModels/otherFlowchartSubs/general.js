const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ESOadditions', { useNewUrlParser: true });

const GeneralSchema = {
    provider: {type: String},
    patientResponse: {type: String},
    complication: {type: String},
    medicalControl: {type: String},
    physicianReferenceNumber: {type: Numbe}
}

const General = new mongoose.model('general', GeneralSchema);

module.exports = {
    General
}