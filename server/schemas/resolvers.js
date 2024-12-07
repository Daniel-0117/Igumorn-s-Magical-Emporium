const { categories, Familiar, magicMerch, Patron, paymentType } = require('../models');

const resolvers = {
    Query: {
        categories: async () => {
            return categories.find();
        },
        familiar: async (parent, { _id }) => {
            return Familiar.findOne({ _id });
        },
        familiars: async (parent, { category, name }) => {
            const params = {};

            if (category) {
                params.category = category;
            }

            if (name) {
                params.name = {
                    $regex: name
                };
            }

            return Familiar.find(params);
        },
        magicMerch: async (parent, { _id }) => {
            return magicMerch.findOne({ _id });
        },
        magicMerchandise: async (parent, { category, name }) => {
            const params = {};

            if (category) {
                params.category = category;
            }

            if (name) {
                params.name = {
                    $regex: name
                };
            }

            return magicMerch.find(params);
        },
        patron: async (parent, { _id }) => {
            return Patron.findOne({ _id });
        },
        patrons: async () => {
            return Patron.find();
        },
        paymentType: async () => {
            return paymentType.find();
        }
        
    },
    Mutation: {
        addPatron: async (parent, {arcanomail, password, name, homeplane }) => {
            const newPatron = await Patron.create({ arcanomail, password, name, homeplane });
            const token = signToken(newPatron);
            return { token, user: newPatron };
        },
        login: async (parent, { arcanomail, password }) => {
            const patron = await Patron.findOne({ arcanomail });

            if (!patron) {
                throw new AuthenticationError('No patron found with this email address');
            }

            const correctPw = await patron.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect password');
            }

            const token = signToken(patron);
            return { token, patron };
        },
        addFamiliar: async (parent, { name, type, level, health }) => {
            const familiar = await Familiar.create({ name, type, level, health });
            return familiar;
        },
        addMagicMerch: async (parent, { name, type, description }) => {
            const magicMerch = await MagicMerch.create({ name, type, description });
            return magicMerch;
        },
    }
};

module.exports = resolvers;