import { gql } from 'apollo-server';

export const movieTypeDefs = gql`
  type Movie {
    id: Int
    title: String
    length: Int
  }
  extend type Query {
    movies: [Movie]
  }
`;
