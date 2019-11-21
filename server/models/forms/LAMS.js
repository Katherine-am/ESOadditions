const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ESOadditions', { useNewUrlParser: true });

const LAMSstrokeScaleSchema = new mongoose.Schema({
    timePerformed: {type: Date},
    datePerformed: {type: Date},
    onsetTime: {type: Date},
    onsetDate: {type: Date},
    facialDroop: {type: String},
    leftArmStrength: {type: String},
    rightArmStrength: {type: String},
    leftGripStrength: {type: String},
    rightGripStrength: {type: String}
})

const LAMSstrokeScale = new mongoose.Schema('LAMSstrokeScale', LAMSstrokeScaleSchema);

module.exports = {
    LAMSstrokeScale
}