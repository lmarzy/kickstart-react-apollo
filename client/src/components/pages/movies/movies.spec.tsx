import React from 'react';
import { render } from '@testing-library/react';

import { MoviesPage } from './movies';

describe('Movies Page', () => {
  const { getByText } = render(<MoviesPage />);

  test('shows correct page title', () => {
    const pageTitle = getByText('Movies Page');
    expect(pageTitle).toBeInTheDocument();
  });
});
