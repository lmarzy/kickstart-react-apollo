import { SpaceXData } from './data';

export const spaceXResolvers = {
  Query: {
    rockets: (
      _root: undefined,
      _args: unknown,
      { dataSources }: any,
    ): Promise<SpaceXData[]> => dataSources.spaceXDatasource.rockets(),
  },
};
