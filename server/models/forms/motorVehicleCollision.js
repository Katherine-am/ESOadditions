const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ESOadditions', { useNewUrlParser: true });

const MotorVehicleCollisionSchema = new mongoose.Schema({
    patientInjured: {type: Boolean},
    positionInVehicle: {type: String},
    seatRow: {type: Number},
    safetyDevicesUsedByPatient:[],
    extricationRequired: {type: Boolean},
    estimatedSpeed: {type: Number},
    vehicleType: {type: String},
    collisionIndicator: {type: String},
    damageLocation: {type: String},
    airbagDeployment: [],
    weather: {type: String},
    lawEnforcementCaseNumber: {type: Number}
})

const MotorVehicleCollision = new mongoose.Schema('motorVehicleCollisions', MotorVehicleCollisionSchema);

module.exports = {
    MotorVehicleCollision
}