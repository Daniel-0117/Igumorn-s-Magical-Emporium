const { Schema, model } = require('mongoose');

const catagorySchema = new Schema({
    catagory_name: {
        type: String,
        required: true
    }
});

const Catagory = model('Catagory', catagorySchema);

module.exports = Catagory;