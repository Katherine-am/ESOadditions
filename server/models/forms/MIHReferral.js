const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ESOadditions', { useNewUrlParser: true });

const MobileIntegratedHealthcareReferralSchema = new mongoose.Schema({
    followupRequired: {type: Boolean}
})

const MobileIntegratedHealthcareReferral = new mongoose.Schema('mobileIntegratedHealthcareReferrals', MobileIntegratedHealthcareReferralSchema);

module.exports = {
    MobileIntegratedHealthcareReferral
}