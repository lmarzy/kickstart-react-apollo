import { gql } from 'apollo-server';

export const spaceXTypeDefs = gql`
  type Rockets {
    id: String!
    name: String!
    active: Boolean!
  }

  extend type Query {
    rockets: [Rockets]
  }
`;
