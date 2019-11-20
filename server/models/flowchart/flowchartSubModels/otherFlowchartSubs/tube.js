const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ESOadditions', { useNewUrlParser: true });

const TubeSchema = {
    time: {type: Date},
    date: {type: Date},
    size: {type: Number},
    placedAt: {type: Number},
    assisstingDevice: {type: String},
    stopTime: {type: Date},
    stopDate: {type: Date},
    placementVerification: {type: String},
    complications: {type: String},
    comment: {type: String},
    successful: {type: Boolean},
}

const Tube = new mongoose.Schema('tubes', TubeSchema);

module.exports = {
    Tube
}