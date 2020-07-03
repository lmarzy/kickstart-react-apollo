import { moviesData, moviesDataInterface } from './data';

export const movieResolver = {
  Query: {
    movies: (): moviesDataInterface[] => moviesData,
  },
};
