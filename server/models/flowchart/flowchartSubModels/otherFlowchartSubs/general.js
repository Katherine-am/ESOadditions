const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ESOadditions', { useNewUrlParser: true });

const GeneralSchema = new mongoose.Schema({
    provider: { type: String },
    patientResponse: { type: String },
    complication: { type: String },
    medicalControl: { type: String },
    physicianReferenceNumber: { type: Number }
})

const General = mongoose.model('general', GeneralSchema);

module.exports = {
    General: General,
    GeneralSchema: GeneralSchema
}