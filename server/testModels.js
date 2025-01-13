const mongoose = require('mongoose');
const { Familiar, MagicMerch, Patron, PaymentType } = require('./models'); // Adjust the path if needed
console.log('MagicMerch:', MagicMerch);

// Function to test model imports
const testModels = async () => {
  try {
    // Connect to your database
    await mongoose.connect('mongodb://127.0.0.1:27017/IGISMagicDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected successfully.');

    // Test each model
    console.log('Familiar:', Familiar ? 'Loaded' : 'Not Loaded');
    console.log('MagicMerch:', MagicMerch ? 'Loaded' : 'Not Loaded');
    console.log('Patron:', Patron ? 'Loaded' : 'Not Loaded');
    console.log('PaymentType:', PaymentType ? 'Loaded' : 'Not Loaded');

    // Optionally, try to interact with each model
    console.log('Testing Familiar model...');
    const testFamiliar = await Familiar.findOne({});
    console.log('Familiar model working:', testFamiliar !== null ? 'Yes' : 'No data found');

    console.log('Testing MagicMerch model...');
    const testMagicMerch = await MagicMerch.findOne({});
    console.log('MagicMerch model working:', testMagicMerch !== null ? 'Yes' : 'No data found');

    console.log('Testing Patron model...');
    const testPatron = await Patron.findOne({});
    console.log('Patron model working:', testPatron !== null ? 'Yes' : 'No data found');

    console.log('Testing PaymentType model...');
    const testPaymentType = await PaymentType.findOne({});
    console.log('PaymentType model working:', testPaymentType !== null ? 'Yes' : 'No data found');

  } catch (err) {
    console.error('Error testing models:', err);
  } finally {
    // Close the database connection
    mongoose.connection.close();
    console.log('Database connection closed.');
  }
};

// Run the test
testModels();
