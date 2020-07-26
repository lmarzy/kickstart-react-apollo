import { gql } from 'apollo-server';

import { movieTypeDefs, bookTypeDefs, spaceXTypeDefs } from '../modules';

const typeDef = gql`
  type Query
`;

export const typeDefs = [typeDef, movieTypeDefs, bookTypeDefs, spaceXTypeDefs];
