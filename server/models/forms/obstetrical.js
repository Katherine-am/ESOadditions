const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ESOadditions', { useNewUrlParser: true });

const ObstetricalSchema = new mongoose.Schema({

})

const Obstetrical = new mongoose.Schema('obstetricals', ObstetricalSchema);

module.exports = {
    Obstetrical
}