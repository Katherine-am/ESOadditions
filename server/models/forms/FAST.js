const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ESOadditions', { useNewUrlParser: true });

const FASTstrokeScaleSchema = new mongoose.Schema({
    timePerformed: {type: Date},
    timeDate: {type: Date},
    onsetTime: {type: Date},
    onsetDate: {type: Date},
    facialDroop: [],
    armWeakness: [],
    speech: {type: String}
})

const FASTstrokeScale = new mongoose.Schema('FASTstrokeScales', FASTstrokeScaleSchema);

module.exports = {
    FASTstrokeScale
}