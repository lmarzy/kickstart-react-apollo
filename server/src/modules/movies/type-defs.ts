import { gql } from 'apollo-server';

export const movieTypeDefs = gql`
  type Movie {
    title: String
    length: Int
  }
  extend type Query {
    movies: [Movie]
  }
`;
