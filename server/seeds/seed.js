const db = require('../config/connection');


const { Familiar, MagicMerch, PaymentType, Patron, Category } = require('../models');

console.log('Loaded Models:', {
    Familiar: !!Familiar,
    MagicMerch: !!MagicMerch,
    PaymentType: !!PaymentType,
    Patron: !!Patron,
    Category: !!Category,
});

const categoriesData = require('./categoriesData.json');
const familiarData = require('./familiarData.json');
const magicMerchData = require('./magicMerchData.json');
const patronData = require('./patronsData.json');
const paymentTypeData = require('./paymentData.json');

db.once('open', async () => {
    try {
        console.log('Connected to the database!');

        // Clear existing data
        await Familiar.deleteMany({});
        await MagicMerch.deleteMany({});
        await PaymentType.deleteMany({});
        await Patron.deleteMany({});
        await Category.deleteMany({});
        console.log('Data cleared!');

        // Insert new data
        await Familiar.insertMany(familiarData);
        await MagicMerch.insertMany(magicMerchData);
        await Patron.insertMany(patronData);
        await PaymentType.insertMany(paymentTypeData);
        await Category.insertMany(categoriesData);
        console.log('Data seeded!');
    } catch (err) {
        console.error('Error seeding database:', err);
    } finally {
        console.log('Closing database connection...');
        process.exit(0);
    }
    
});
