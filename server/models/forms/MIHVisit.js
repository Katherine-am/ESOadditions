const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ESOadditions', { useNewUrlParser: true });

const MobileIntegratedHealthcareVisitSchema = new mongoose.Schema({
    patientReferredFrom: {type: String},
    nameOfReferralOrProgram: {type: String},
    cost: {type: Number},
    billed: {type: Number}
})

const MobileIntegratedHealthcareVisit = new mongoose.Schema('mobileIntegratedHealthcareVisits', MobileIntegratedHealthcareVisitSchema);

module.exports = {
    MobileIntegratedHealthcareVisit
}