const { Schema, model } = require('mongoose');

const paymentTypeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    patron: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Patron'
        }
    ]
});

const PaymentType = model('PaymentType', paymentTypeSchema);

module.exports = PaymentType;