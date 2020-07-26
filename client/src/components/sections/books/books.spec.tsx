import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import { Books } from './books';
import { BOOKS_QUERY } from './books.query';

const mocksData = [
  {
    request: {
      query: BOOKS_QUERY,
    },
    result: {
      data: {
        movies: [
          {
            id: 10001,
            title: 'To Kill a Mockingbird',
            length: 'Harper Lee',
          },
          {
            id: 10002,
            title: 'The Great Gatsby',
            author: 'F.Scott Fitzgerald',
          },
        ],
      },
    },
  },
];

const mocksError = [
  {
    request: {
      query: BOOKS_QUERY,
    },
    error: new Error('aw shucks'),
  },
];

describe('<Books />', () => {
  afterEach(cleanup);
  test('renders component in loading state', () => {
    const { getByText } = render(
      <MockedProvider mocks={mocksData} addTypename={false}>
        <Books />
      </MockedProvider>,
    );

    const loading = getByText('Loading...');
    expect(loading).toBeInTheDocument();
  });

  test('renders component in final state', async () => {
    const { getByTestId } = render(
      <MockedProvider mocks={mocksData} addTypename={false}>
        <Books />
      </MockedProvider>,
    );

    await waitFor(() => getByTestId('books'));

    expect(getByTestId('books')).toBeInTheDocument();
  });
  test('renders component in error state', async () => {
    const { getByText } = render(
      <MockedProvider mocks={mocksError} addTypename={false}>
        <Books />
      </MockedProvider>,
    );

    await waitFor(() => getByText('Error :('));

    expect(getByText('Error :(')).toBeInTheDocument();
  });
});
