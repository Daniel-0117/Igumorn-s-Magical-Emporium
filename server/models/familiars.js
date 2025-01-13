const {Schema, model} = require('mongoose');

const familiarSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    health: {
        type: Number,
        required: true
    },
    price: {
        type: String,
        required: true
    }
});

const Familiar = model('Familiar', familiarSchema);

module.exports = Familiar;