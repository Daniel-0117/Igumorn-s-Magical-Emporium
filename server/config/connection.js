const mongoose = require('mongoose');
require('dotenv').config();
console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/IGISMagicDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then (() => console.log('MongoDB connected successfully'))
.catch (() => console.log('MongoDB connection failed fool'));

module.exports = mongoose.connection;
