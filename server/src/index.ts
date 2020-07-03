import { ApolloServer } from 'apollo-server';

import { typeDefs, resolvers, dataSources } from './graphql';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: (): any => dataSources,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
