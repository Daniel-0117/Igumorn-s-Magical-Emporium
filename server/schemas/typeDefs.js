const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Familiar {
        _id: ID
        name: String
        type: String
        level: Int
        health: Int
    }
    
    type magicMerch {
        _id: ID
        name: String
        type: String
        description: String
        requirements: String
    
    type patron {
        _id: ID
        username: String
        email: String
        password: String
    }
    
    type paymentType {
        _id: ID
        name: String
        patron: [patron]

    type Auth {
        token: ID
        user: User
    }
    
    type Query {
        me: User
    }
    
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addFamiliar(name: String!, type: String!, level: Int!, health: Int!): Familiar
    }
    `;

    module.exports = typeDefs;