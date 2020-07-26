import { gql } from 'apollo-server';

export const bookTypeDefs = gql`
  type Book {
    id: Int
    title: String
    author: String
  }
  extend type Query {
    books: [Book]
  }
`;
