import { gql } from 'apollo-server';

import { movieTypeDefs, spaceXTypeDefs } from '../modules';

const typeDef = gql`
  type Query
`;

export const typeDefs = [typeDef, movieTypeDefs, spaceXTypeDefs];
