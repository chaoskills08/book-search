const { gql } = require("apollo-server-express");


const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: String!
    savedBooks: [Book!]
  }

  type Book {
    bookId: ID!
    authors: [String!]
    description: String!
    title: String!
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: user
  }

  input BookInput {
    authors: [String!]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Query {
    getSingleUser: User
    me: User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String! password: String!): Auth
    saveBook(_id: ID!, bookToSave: BookInput!): User
    removeBook(_id: ID!, bookToRemove: ID!): User
  }
`;

module.exports = typeDefs;