const { Schema, model } = require('mongoose');

const magicMerchSchema = new Schema({
    item_name: { 
        type: String, 
        required: true 
    },
    item_type: { 
        type: String, 
        required: true 
    },
    item_description: { 
        type: String, 
        required: true 
    },
    item_requirements: { 
        type: String, 
        required: true 
    }
});

const magicMerch = model('magicMerch', magicMerchSchema);

module.exports = magicMerch;
