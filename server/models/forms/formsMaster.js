const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ESOadditions', { useNewUrlParser: true });

const FormsSchema = new mongoose.Schema({
    advancedAirway: [AdvancedAirwaySchema],
    mobileIntegratedHealthcareVisit: [MobileIntegratedHealthcareVisitSchema],
    LAMSstrokeScale: [LAMSstrokeScaleSchema],
    motorVehicleCollision: [MotorVehicleCollisionSchema],
    burns: [BurnsSchema],
    CPR: [CPRSchema],
    obstetrical: [ObstetricalSchema],
    sepsisScreening: [SepsisScreeningSchema],
    FASTstrokeScale: [FASTstrokeScaleSchema],
    mobileIntegratedHealthcareReferral: [MobileIntegratedHealthcareReferralSchema],
    infuenzaScreening: [InfluenzaScreeningSchema],
    syndromicSurveillanceOverdose: [SyndromicSurveillanceOverdoseSchema]
})

const Forms = new mongoose.Schema('forms', FormsSchema);

module.exports = {
    Forms
}