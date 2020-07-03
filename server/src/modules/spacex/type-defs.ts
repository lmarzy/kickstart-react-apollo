import { gql } from 'apollo-server';

export const spaceXTypeDefs = gql`
  type Rockets {
    id: String!
    name: String!
  }

  extend type Query {
    rockets: [Rockets]
  }
`;
