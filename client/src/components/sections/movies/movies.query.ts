import { gql } from '@apollo/client';

export const MOVIES_QUERY = gql`
  query getMovies {
    movies {
      id
      title
      length
    }
  }
`;

interface Movies {
  id: number;
  title: string;
  length: number;
}

export interface MoviesQueryResult {
  movies: Movies[];
}
