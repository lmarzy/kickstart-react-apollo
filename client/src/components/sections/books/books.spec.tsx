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
        books: [
          {
            id: 1000,
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
          },
          {
            id: 1001,
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
    const { getByText, getByTestId } = render(
      <MockedProvider mocks={mocksData} addTypename={false}>
        <Books />
      </MockedProvider>,
    );

    await waitFor(() => getByTestId('books'));

    mocksData[0].result.data.books.forEach((book) => {
      expect(getByText(book.title)).toBeInTheDocument();
      expect(getByText(book.author)).toBeInTheDocument();
    });
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
