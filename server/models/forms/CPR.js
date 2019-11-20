const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ESOadditions', { useNewUrlParser: true });

const CPRSchema = new mongoose.Schema({
    cardianArrest: {type: Boolean}
})

const CPR = new mongoose.Schema('CPR', CPRSchema);

module.exports = {
    CPR
}