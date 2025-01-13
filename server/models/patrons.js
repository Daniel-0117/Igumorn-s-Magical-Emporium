const { Schema, model } = require('mongoose');

const patronSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    arcanomail: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
        type: String,
        required: true
    },
    homeplane: {
        type: String,
        required: true,
        unique: true
    },
    paymentType: [
        {
            type: Schema.Types.ObjectId,
            ref: 'PaymentType'
        }
    ]
});

const Patron = model('Patron', patronSchema);

module.exports = Patron;