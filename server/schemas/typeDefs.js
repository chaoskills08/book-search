const { gql } = require('apollo-server-express');

const typeDefs = gql`

    # Define what can be queried for Books
    type Books {
        _id: ID
        authors: String
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    # Define what can be queried for User
    type User {
        username: String
        email: String
        password: String
        savedBooks: bookSchema
    }

    # Query books/users
    type Query {
        books: [Books]
        users: [User]
    }

    # Mutation types
    type Mutation {
        addUser(username: String!, password: String!): User
    }
`;

module.exports = typeDefs;
