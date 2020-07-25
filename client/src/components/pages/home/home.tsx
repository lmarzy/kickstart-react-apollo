import React, { FunctionComponent, ReactElement } from 'react';
import { useQuery, gql } from '@apollo/client';

const ROCKETS = gql`
  {
    rockets {
      id
      name
    }
    movies {
      title
      length
    }
  }
`;

interface Rockets {
  id: string;
  name: string;
}

interface Movies {
  title: string;
  length: number;
}

interface RocketQueryResult {
  rockets: Rockets[];
  movies: Movies[];
}

export const HomePage: FunctionComponent = (): ReactElement => {
  const { loading, error, data } = useQuery<RocketQueryResult>(ROCKETS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

  return (
    <>
      <h1>Home Page</h1>
      {data.rockets.map(({ id, name }) => (
        <div key={id}>
          <p>{name}</p>
        </div>
      ))}
      {data.movies.map(({ title, length }) => (
        <div key={title}>
          <p>{title}</p>
          <p>{length}</p>
        </div>
      ))}
    </>
  );
};
