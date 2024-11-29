const { Schema, model } = require('mongoose');

const patronSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    arcanoMail: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
        type: String,
        required: true
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