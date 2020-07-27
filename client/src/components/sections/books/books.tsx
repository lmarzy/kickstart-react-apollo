import React, { ReactElement, Fragment } from 'react';
import { useQuery } from '@apollo/client';

import { BOOKS_QUERY, BooksQueryResult } from './books.query';

export const Books = (): ReactElement => {
  const { loading, error, data } = useQuery<BooksQueryResult>(BOOKS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <h2 className="u-mb-2">Books List</h2>
      {data && (
        <dl data-testid="books">
          {data.books.map(({ id, title, author }) => (
            <Fragment key={id}>
              <dt>{title}:</dt>
              <dl>{author}</dl>
            </Fragment>
          ))}
        </dl>
      )}
    </>
  );
};
