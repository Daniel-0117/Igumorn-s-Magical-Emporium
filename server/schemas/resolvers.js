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
    }
};

module.exports = resolvers;