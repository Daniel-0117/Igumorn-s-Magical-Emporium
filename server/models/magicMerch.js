const { Schema, model } = require('mongoose');

const magicMerchSchema = new Schema({
    name: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    requirements: { 
        type: String, 
        required: true 
    }
});

const MagicMerch = model('magicMerch', magicMerchSchema);

console.log('MagicMerch exported', MagicMerch);
module.exports = MagicMerch;
