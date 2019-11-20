const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ESOadditions', { useNewUrlParser: true });

const BurnsSchema = new mongoose.Schema({
    degreeBurn: {type: Number}
})

const Burns = new mongoose.Schema('burns', BurnsSchema);

module.exports = {
    Burns
}