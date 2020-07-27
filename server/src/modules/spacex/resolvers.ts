import { SpaceXData } from './data';

export const spaceXResolvers = {
  Query: {
    rockets: (
      _root: null,
      _args: null,
      { dataSources }: any,
    ): Promise<SpaceXData[]> => dataSources.spaceXDatasource.rockets(),
  },
};
