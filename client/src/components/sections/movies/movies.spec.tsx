import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import { Movies } from './movies';
import { MOVIES_QUERY } from './movies.query';

const mocksData = [
  {
    request: {
      query: MOVIES_QUERY,
    },
    result: {
      data: {
        movies: [
          {
            id: 10001,
            title: 'Lost Boys',
            length: 148,
          },
          {
            id: 10002,
            title: 'Terminator',
            length: 210,
          },
        ],
      },
    },
  },
];

const mocksError = [
  {
    request: {
      query: MOVIES_QUERY,
    },
    error: new Error('aw shucks'),
  },
];

describe('<Movies />', () => {
  afterEach(cleanup);
  test('renders component in loading state', () => {
    const { getByText } = render(
      <MockedProvider mocks={mocksData} addTypename={false}>
        <Movies />
      </MockedProvider>,
    );

    const loading = getByText('Loading...');
    expect(loading).toBeInTheDocument();
  });

  test('renders component in final state', async () => {
    const { getByTestId } = render(
      <MockedProvider mocks={mocksData} addTypename={false}>
        <Movies />
      </MockedProvider>,
    );

    await waitFor(() => getByTestId('movies'));

    expect(getByTestId('movies')).toBeInTheDocument();
  });
  test('renders component in error state', async () => {
    const { getByText } = render(
      <MockedProvider mocks={mocksError} addTypename={false}>
        <Movies />
      </MockedProvider>,
    );

    await waitFor(() => getByText('Error :('));

    expect(getByText('Error :(')).toBeInTheDocument();
  });
});
