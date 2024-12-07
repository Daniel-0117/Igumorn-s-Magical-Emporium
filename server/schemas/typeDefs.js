const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Familiar {
        _id: ID
        name: String
        type: String
        level: Int
        health: Int
    }
    
    type MagicMerch {
        _id: ID
        name: String
        type: String
        description: String
        requirements: String
    }
    
    type Patron {
        _id: ID
        name: String
        arcanomail: String
        password: String
        homeplane: String
    }
    
    type PaymentType {
        _id: ID
        name: String
        patron: [patron]
    }

    type Category {
        _id: ID
        name: String
    }

    type Auth {
        token: ID
        user: Patron
    }
    
    type Query {
       categories: [Category]
        familiar(_id: ID!): Familiar
        familiars(category: String, name: String): [Familiar]
        magicMerch(_id: ID!): MagicMerch
        magicMerchandise(category: String, name: String): [MagicMerch]
        patron(_id: ID!): Patron
        patrons: [Patron]
        paymentType: [PaymentType]
    }
    
    type Mutation {
        login(email: String!, password: String!): Auth
        addPatron(name: String!, arcanomail: String!, password: String!, homeplane: String!): Auth
        addFamiliar(name: String!, type: String!, level: Int!, health: Int!): Familiar
        addMagicMerch(name: String!, type: String!, description: String!, requirements: String!): MagicMerch
    }
    `;

    module.exports = typeDefs;