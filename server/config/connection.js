const mongoose = require('mongoose');
require('dotenv').config();

console.log('MONGO_URI:', process.env.MONGO_URI);  // This will help you verify the value during deploy

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/IGISMagicDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.error('MongoDB connection failed fool:', err.message));  // Log the actual error

module.exports = mongoose.connection;
