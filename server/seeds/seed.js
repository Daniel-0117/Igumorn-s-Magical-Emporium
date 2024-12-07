const db = require('../config/connection');
const { Familiar, magicMerch, paymentType, Patron, categories } = require('../models');

const categoriesData = require('categoriesData.json');
const familiarData = require('./familiarData.json');
const magicMerchData = require('./magicMerchData.json');
const patronData = require('./patronData.json');
const paymentTypeData = require('./paymentTypeData.json');

db.once('open', async () => {
    await Patron.deleteMany({});

    const addFamiliar = await Familiar.insertMany(familiarData);
    const addMagicMerch = await magicMerch.insertMany(magicMerchData);
    const addPatron = await patron.insertMany(patronData);
    const addPaymentType = await paymentType.insertMany(paymentTypeData);
    const addCategories = categories.insert(categoriesData);

    console.log('Data seeded!');
    process.exit(0);
}
);


