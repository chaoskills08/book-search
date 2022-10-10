import {gql} from '@apollo/client';

export const ADD_USER = gql`
mutation createUser($username: String!, $email: String!, $password: String!) {
  createUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
      email
    }
  }
}
`;

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      email
    }
  }
}
`;

export const SAVE_BOOK = gql`
mutation saveBook($id: ID!, $bookToSave: BookInput!) {
  saveBook(_id: $id, bookToSave: $bookToSave) {
    _id
    savedBooks {
      _id
      authors
      description
      bookId
      image
      link
      title
    }
  }
}
`;

export const REMOVE_BOOK = gql`
mutation removeBook($id: ID!, $bookToDelete: ID!) {
  deleteBook(_id: $id, bookToDelete: $bookToDelete) {
    _id
    username
    email
    savedBooks {
      _id
      authors
      description
      bookId
      image
      link
      title
    }
  }
}
`;