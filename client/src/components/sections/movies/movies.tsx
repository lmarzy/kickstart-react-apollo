import React, { ReactElement, Fragment } from 'react';
import { useQuery } from '@apollo/client';

import { MOVIES_QUERY, MoviesQueryResult } from './movies.query';

export const Movies = (): ReactElement => {
  const { loading, error, data } = useQuery<MoviesQueryResult>(MOVIES_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <h1>Movie List</h1>
      {data && (
        <dl data-testid="movies">
          {data.movies.map(({ id, title, length }) => (
            <Fragment key={id}>
              <dt>{title}:</dt>
              <dl>{length}</dl>
            </Fragment>
          ))}
        </dl>
      )}
    </>
  );
};
